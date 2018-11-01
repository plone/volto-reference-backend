import slugify from 'slugify';
import { omit } from 'lodash';

import { DocumentRepository } from '../../repositories';

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
      });
    },
  },
  {
    op: 'post',
    view: '',
    handler: (context, req, res) =>
      DocumentRepository.create(
        {
          parent: context.get('uuid'),
          id: req.body.id || slugify(req.body.title, { lower: true }),
          type: req.body['@type'],
          position_in_parent: 0,
          json: omit(req.body, omitProperties),
        },
        { method: 'insert' },
      ).then(document =>
        res.status(201).send({
          ...document.get('json'),
          '@id': `${req.protocol || 'http'}://${req.headers.host}${
            req.params[0]
          }/${document.get('id')}`,
          '@type': document.get('type'),
          id: document.get('id'),
          UID: document.get('uuid'),
        }),
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
        .then(res.status(204).send()),
  },
];
