import request from 'supertest';

import app from '../../app';

describe('Content', () => {
  it('should handle login', () =>
    request(app)
      .get('/@login')
      .expect(200)
      .expect(res => expect(res.body.token).toBeDefined()));
  it('should handle login-renew', () =>
    request(app)
      .get('/@login-renew')
      .expect(200)
      .expect(res => expect(res.body.token).toBeDefined()));
  it('should handle logout', () =>
    request(app)
      .get('/@logout')
      .expect(204));
});
