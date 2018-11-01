export default [
  {
    op: 'get',
    view: '/@login',
    handler: (context, req, res) =>
      res.send({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IiIsInN1YiI6ImFkbWluIn0.RVl8ZFJWIaA-8ujyulJvw0j3F3qFjIHDIJFK0GF6j_0',
      }),
  },
  {
    op: 'get',
    view: '/@login-renew',
    handler: (context, req, res) =>
      res.send({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IiIsInN1YiI6ImFkbWluIn0.RVl8ZFJWIaA-8ujyulJvw0j3F3qFjIHDIJFK0GF6j_0',
      }),
  },
  {
    op: 'get',
    view: '/@logout',
    handler: (context, req, res) => res.status(204).send(),
  },
];
