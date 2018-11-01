import { drop, head, last } from 'lodash';

import { DocumentRepository } from '../../repositories';

function traverse(document, slugs, items) {
  if (slugs.length === 0) {
    return Promise.resolve(items);
  } else {
    return DocumentRepository.findOne({
      parent: document.get('uuid'),
      id: head(slugs),
    }).then(parent =>
      traverse(parent, drop(slugs), [
        ...items,
        {
          '@id': `${last(items)['@id']}/${parent.get('id')}`,
          title: parent.get('json').title,
        },
      ]),
    );
  }
}

export default [
  {
    op: 'get',
    view: '/@breadcrumbs',
    handler: (context, req, res) => {
      const slugs = req.params[0].split('/');
      return DocumentRepository.findOne({ parent: null })
        .then(document =>
          traverse(document, drop(slugs), [
            {
              '@id': `${req.protocol || 'http'}://${req.headers.host}`,
              title: document.get('json').title,
            },
          ]),
        )
        .then(items =>
          res.send({
            '@id': `${req.protocol || 'http'}://${req.headers.host}${
              req.params[0]
            }/@breadcrumbs`,
            items,
          }),
        );
    },
  },
];
