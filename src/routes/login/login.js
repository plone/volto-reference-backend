export default [
  {
    op: 'post',
    view: '/@login',
    handler: (context, req, res) =>
      res.send({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IkpvaG4gRG9lIiwic3ViIjoiYWRtaW4iLCJleHAiOjE1NDExMTI3Njg5fQ.3KMYq1NbPz3fMWqApH574yHEuS8mhYRRjPaKhod5q80',
      }),
  },
  {
    op: 'post',
    view: '/@login-renew',
    handler: (context, req, res) =>
      res.send({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IkpvaG4gRG9lIiwic3ViIjoiYWRtaW4iLCJleHAiOjE1NDExMTI3Njg5fQ.3KMYq1NbPz3fMWqApH574yHEuS8mhYRRjPaKhod5q80',
      }),
  },
  {
    op: 'post',
    view: '/@logout',
    handler: (context, req, res) => res.status(204).send(),
  },
];
