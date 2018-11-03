/**
 * Content routes.
 * @module routes/content/content
 */

import slugify from 'slugify';
import { keys, omit, pick } from 'lodash';

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
function documentToJson(document, req, id = '') {
  return {
    ...document.get('json'),
    '@id': `${req.protocol || 'http'}://${req.headers.host}${
      req.params[0]
    }${id}`,
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
            items: items.map(item =>
              documentToJson(item, req, `/${item.get('id')}`),
            ),
          }),
        ),
      ),
  },
  {
    op: 'post',
    view: '',
    handler: (context, permissions, req, res) =>
      requirePermission('add', permissions, res, () =>
        TypeRepository.findOne({ id: req.body['@type'] }).then(type =>
          DocumentRepository.create(
            {
              parent: context.get('uuid'),
              id: req.body.id || slugify(req.body.title, { lower: true }),
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
            ),
        ),
      ),
  },
  {
    op: 'patch',
    view: '',
    handler: (context, permissions, req, res) =>
      requirePermission('modify', permissions, res, () =>
        context
          .save(
            {
              uuid: context.get('uuid'),
              json: {
                ...context.get('json'),
                ...omit(req.body, omitProperties),
              },
            },
            { patch: true },
          )
          .then(() => res.status(204).send()),
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
