import request from 'supertest';

import app from '../../app';
import bookshelf from '../../bookshelf';
import { DocumentRepository } from '../../repositories';

describe('Content', () => {
  afterEach(() =>
    DocumentRepository.delete({
      parent: '5ba6ac12-2a02-40be-a76f-9067ce98ed47',
    }));
  afterAll(() => bookshelf.knex.destroy());

  it('should return a content object', () =>
    request(app)
      .get('/news')
      .expect(200)
      .expect(res =>
        Promise.all([
          expect(res.body['@id']).toMatch(/http:\/\/127.0.0.1:.*\/news/),
          expect(res.body['@type']).toBe('folder'),
          expect(res.body.title).toBe('News'),
          expect(res.body.id).toBe('news'),
        ]),
      ));
  it('should add a content object', () =>
    request(app)
      .post('/news')
      .send({
        '@type': 'page',
        title: 'My News Item',
        description: 'News Description',
      })
      .expect(201)
      .expect(res =>
        Promise.all([
          expect(res.body['@id']).toMatch(
            /http:\/\/127.0.0.1:.*\/news\/my-news-item/,
          ),
          expect(res.body['@type']).toBe('page'),
          expect(res.body.title).toBe('My News Item'),
          expect(res.body.description).toBe('News Description'),
          expect(res.body.id).toBe('my-news-item'),
        ]),
      ));
  it('should update a content object', () =>
    DocumentRepository.create(
      {
        parent: '5ba6ac12-2a02-40be-a76f-9067ce98ed47',
        id: 'my-news-item',
        type: 'page',
        position_in_parent: 0,
        json: {
          title: 'My News Item',
          description: 'News Description',
        },
      },
      { method: 'insert' },
    ).then(() =>
      request(app)
        .patch('/news/my-news-item')
        .send({
          title: 'My New News Item',
        })
        .expect(204),
    ));
  it('should delete a content object', () =>
    DocumentRepository.create(
      {
        parent: '5ba6ac12-2a02-40be-a76f-9067ce98ed47',
        id: 'my-news-item',
        type: 'page',
        position_in_parent: 0,
        json: {
          title: 'My News Item',
          description: 'News Description',
        },
      },
      { method: 'insert' },
    ).then(() =>
      request(app)
        .delete('/news/my-news-item')
        .expect(204),
    ));
  it('should return not found when content not found', () =>
    request(app)
      .get('/random')
      .expect(404));
});
