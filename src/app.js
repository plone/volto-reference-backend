/**
 * App.
 * @module app
 */

import express from 'express';
import bodyParser from 'body-parser';
import { compact, drop, head, map, uniq } from 'lodash';
import jwt from 'jsonwebtoken';

import routes from './routes';
import {
  DocumentRepository,
  RolePermissionRepository,
  UserRepository,
  UserRoleDocumentRepository,
} from './repositories';
import { secret } from './config';

const app = express();

// Parse JSON
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

// Add JWT authentication
app.use((req, res, next) => {
  const token =
    req.headers.authorization &&
    req.headers.authorization.match(/^Bearer (.*)$/);
  UserRepository.findOne({ id: 'anonymous' }).then(anonymous => {
    if (token) {
      jwt.verify(token[1], secret, (err, decoded) => {
        if (err || new Date().getTime() / 1000 > decoded.exp) {
          req.user = anonymous;
          next();
        } else {
          UserRepository.findOne({ id: decoded.sub })
            .then(user => {
              req.user = user;
              next();
            })
            .catch(UserRepository.Model.NotFoundError, () => {
              req.user = anonymous;
              next();
            });
        }
      });
    } else {
      req.user = anonymous;
      next();
    }
  });
});

/**
 * Get roles.
 * @method getRoles
 * @param {Object} document Current document object.
 * @param {Object} user Current user object.
 * @returns {Array} An array of the permissions.
 */
function getRoles(document, user) {
  return UserRoleDocumentRepository.findAll({
    document: document.get('uuid'),
    user: user.get('id'),
  }).then(entries => entries.map(entry => entry.get('role')));
}

/**
 * Traverse path.
 * @method traverse
 * @param {Object} document Current document object.
 * @param {Array} slugs Array of slugs.
 * @param {Object} user Current user object.
 * @param {Array} roles Array of roles.
 * @returns {Promise<Object>} A Promise that resolves to an object.
 */
function traverse(document, slugs, user, roles) {
  if (slugs.length === 0) {
    return RolePermissionRepository.findAll([
      'role',
      'in',
      [
        ...roles,
        user.get('id') === 'anonymous' ? 'anonymous' : 'authenticated',
      ],
    ]).then(entries => ({
      document,
      permissions: entries.map(entry => entry.get('permission')),
    }));
  } else {
    return DocumentRepository.findOne({
      parent: document.get('uuid'),
      id: head(slugs),
    }).then(child =>
      getRoles(child, user).then(childRoles =>
        traverse(child, drop(slugs), user, uniq([...roles, ...childRoles])),
      ),
    );
  }
}

map(routes, route => {
  app[route.op](`*${route.view}`, (req, res) => {
    const slugs = req.params[0].split('/');
    DocumentRepository.findOne({ parent: null })
      .then(document =>
        getRoles(document, req.user).then(roles =>
          traverse(document, compact(slugs), req.user, roles),
        ),
      )
      .then(({ document, permissions }) =>
        route.handler(document, permissions, req, res),
      )
      .catch(DocumentRepository.Model.NotFoundError, () => {
        res.status(404).send({ error: 'Not Found' });
      });
  });
});

export default app;
