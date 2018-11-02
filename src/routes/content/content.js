/**
 * Content routes.
 * @module routes/content/content
 */

import slugify from 'slugify';
import { omit } from 'lodash';

import { DocumentRepository, TypeRepository } from '../../repositories';

const omitProperties = ['@type', 'id'];

export default [
  {
    op: 'get',
    view: '',
    handler: (context, req, res) => {
      res.send({
        ...context.get('json'),
        '@id': `${req.protocol || 'http'}://${req.headers.host}${
          req.params[0]
        }`,
        '@type': context.get('type'),
        id: context.get('id'),
        UID: context.get('uuid'),
        items: [],
      });
    },
  },
  {
    op: 'post',
    view: '',
    handler: (context, req, res) =>
      TypeRepository.findOne({ id: req.body['@type'] }).then(type =>
        DocumentRepository.create(
          {
            parent: context.get('uuid'),
            id: req.body.id || slugify(req.body.title, { lower: true }),
            type: req.body['@type'],
            position_in_parent: 0,
            json: {
              ...omit(req.body, omitProperties),
              layout: type.get('schema').default_layout,
            },
          },
          { method: 'insert' },
        )
          .then(document => document.fetch())
          .then(document =>
            res.status(201).send({
              ...document.get('json'),
              '@id': `${req.protocol || 'http'}://${req.headers.host}${
                req.params[0]
              }/${document.get('id')}`,
              '@type': document.get('type'),
              id: document.get('id'),
              UID: document.get('uuid'),
              items: [],
            }),
          ),
      ),
  },
  {
    op: 'patch',
    view: '',
    handler: (context, req, res) =>
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
  },
  {
    op: 'delete',
    view: '',
    handler: (context, req, res) =>
      DocumentRepository.delete({ uuid: context.get('uuid') }).then(() =>
        res.status(204).send(),
      ),
  },
];
