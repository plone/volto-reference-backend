import request from 'supertest';

import app from '../../app';
import bookshelf from '../../bookshelf';
import { DocumentRepository } from '../../repositories';

describe('Content', () => {
  beforeAll(() =>
    DocumentRepository.create(
      {
        uuid: '5ba6ac12-2a02-40be-a76f-9067ce98ed47',
        parent: '4ba6ac12-2a02-40be-a76f-9067ce98ed47',
        id: 'news',
        type: 'folder',
        position_in_parent: 0,
        json: {
          title: 'News',
          description: 'My News Folder',
        },
      },
      { method: 'insert' },
    ));
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
      //      .then(() => console.log('kek'))
      //      .catch(err => console.log(err)));
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
  it('should return not found when content not found', () =>
    request(app)
      .get('/random')
      .expect(404));
  afterAll(() =>
    DocumentRepository.delete({
      uuid: '5ba6ac12-2a02-40be-a76f-9067ce98ed47',
    }).then(() => bookshelf.knex.destroy()));
});
