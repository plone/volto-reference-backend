import request from 'supertest';

import app from '../../app';
import bookshelf from '../../bookshelf';

describe('Types', () => {
  it('should return a list of types', () =>
    request(app)
      .get('/@types')
      .expect(200)
      .expect(res => {
        expect(res.body.length).toBe(3);
        expect(res.body[0]['@id']).toBeDefined();
        expect(res.body[0].title).toBeDefined();
        expect(res.body[0].addable).toBeDefined();
      }));
  it('should return a type', () =>
    request(app)
      .get('/@types/page')
      .expect(200)
      .expect(res => {
        expect(res.body.title).toBe('Page');
      }));
  it('should return not found when type not found', () =>
    request(app)
      .get('/@types/random')
      .expect(404));
  afterAll(() => {
    bookshelf.knex.destroy();
  });
});
