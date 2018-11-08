/**
 * Search routes.
 * @module routes/search/search
 */

import { DocumentRepository } from '../../repositories';
import { requirePermission } from '../../helpers';

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
            items: items.map(item => documentToJson(item, req)),
          }),
        ),
      ),
  },
];
