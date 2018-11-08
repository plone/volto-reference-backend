/**
 * Content routes.
 * @module routes/content/content
 */

import slugify from 'slugify';
import { dropRight, keys, omit, pick } from 'lodash';

import { DocumentRepository, TypeRepository } from '../../repositories';
import { requirePermission } from '../../helpers';

const omitProperties = ['@type', 'id'];

/**
 * Convert document to json.
 * @method documentToJson
 * @param {Object} document Current document object.
 * @param {Object} req Request object.
 * @returns {Object} Json representation of the document.
 */
function documentToJson(document, req) {
  return {
    ...document.get('json'),
    '@id': `${req.protocol || 'http'}://${req.headers.host}${document.get(
      'path',
    )}`,
    '@type': document.get('type'),
    id: document.get('id'),
    UID: document.get('uuid'),
    is_folderish: true,
  };
}

export default [
  {
    op: 'get',
    view: '',
    handler: (context, permissions, req, res) =>
      requirePermission('view', permissions, res, () =>
        DocumentRepository.findAll(
          { parent: context.get('uuid') },
          'position_in_parent',
        ).then(items =>
          res.send({
            ...documentToJson(context, req),
            items: items.map(item => documentToJson(item, req)),
          }),
        ),
      ),
  },
  {
    op: 'post',
    view: '',
    handler: (context, permissions, req, res) =>
      requirePermission('add', permissions, res, () =>
        TypeRepository.findOne({ id: req.body['@type'] }).then(type => {
          const id = req.body.id || slugify(req.body.title, { lower: true });
          DocumentRepository.create(
            {
              parent: context.get('uuid'),
              id,
              path: `${
                context.get('path') === '/' ? '' : context.get('path')
              }/${id}`,
              type: req.body['@type'],
              position_in_parent: 0,
              json: {
                ...omit(
                  pick(req.body, keys(type.get('schema').properties)),
                  omitProperties,
                ),
                layout: type.get('schema').default_layout,
              },
            },
            { method: 'insert' },
          )
            .then(document => document.fetch())
            .then(document =>
              res
                .status(201)
                .send(documentToJson(document, req, `/${document.get('id')}`)),
            );
        }),
      ),
  },
  {
    op: 'patch',
    view: '',
    handler: (context, permissions, req, res) =>
      requirePermission('modify', permissions, res, () =>
        TypeRepository.findOne({ id: req.body['@type'] }).then(type => {
          const id = req.body.id || context.get('id');
          const path = context.get('path');
          const slugs = path.split('/');
          const parent = dropRight(slugs).join('/');
          const newPath = path === '/' ? path : `${parent}/${id}`;
          return context
            .save(
              {
                uuid: context.get('uuid'),
                id,
                path: newPath,
                json: {
                  ...context.get('json'),
                  ...omit(
                    pick(req.body, keys(type.get('schema').properties)),
                    omitProperties,
                  ),
                },
              },
              { patch: true },
            )
            .then(
              () =>
                path === newPath
                  ? Promise.resolve({})
                  : DocumentRepository.replacePath(path, newPath),
            )
            .then(data => res.status(204).send());
        }),
      ),
  },
  {
    op: 'delete',
    view: '',
    handler: (context, permissions, req, res) =>
      requirePermission('delete', permissions, res, () =>
        DocumentRepository.delete({ uuid: context.get('uuid') }).then(() =>
          res.status(204).send(),
        ),
      ),
  },
];
