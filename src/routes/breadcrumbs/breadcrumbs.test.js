import request from 'supertest';

import app from '../../app';
import bookshelf from '../../bookshelf';
import { DocumentRepository } from '../../repositories';

describe('Content', () => {
  afterAll(() => bookshelf.knex.destroy());

  it('should return the navigation', () =>
    request(app)
      .get('/news/@breadcrumbs')
      .expect(200)
      .expect(res =>
        Promise.all([
          expect(res.body['@id']).toMatch(
            /http:\/\/127.0.0.1:.*\/news\/@breadcrumbs/,
          ),
          expect(res.body.items.length).toBe(2),
          expect(res.body.items[0]['@id']).toMatch(/http:\/\/127.0.0.1:.*/),
          expect(res.body.items[0].title).toBe('Site'),
          expect(res.body.items[1]['@id']).toMatch(
            /http:\/\/127.0.0.1:.*\/news/,
          ),
          expect(res.body.items[1].title).toBe('News'),
        ]),
      ));
});
