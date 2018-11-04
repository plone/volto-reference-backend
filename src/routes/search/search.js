/**
 * Search routes.
 * @module routes/search/search
 */

import { DocumentRepository } from '../../repositories';
import { requirePermission } from '../../helpers';

export default [
  {
    op: 'get',
    view: '/@search',
    handler: (context, permissions, req, res) =>
      requirePermission('view', permissions, res, () =>
        DocumentRepository.findAll(
          { parent: context.get('uuid') },
          'position_in_parent',
        ).then(items =>
          res.send({
            '@id': `${req.protocol || 'http'}://${req.headers.host}${
              req.params[0]
            }/@search`,
            items: items.map(item => ({
              '@id': `${req.protocol || 'http'}://${req.headers.host}${
                req.params[0]
              }/${item.get('id')}`,
              '@type': item.get('type'),
              title: item.get('json').title,
              description: item.get('json').description,
            })),
          }),
        ),
      ),
  },
];
