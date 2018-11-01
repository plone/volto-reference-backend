import request from 'supertest';

import app from '../../app';

describe('Actions', () => {
  it('should get actions', () =>
    request(app)
      .get('/@actions')
      .expect(200)
      .expect(res => expect(res.body.object).toBeDefined()));
});
