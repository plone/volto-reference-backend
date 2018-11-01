export default [
  {
    op: 'get',
    view: '',
    handler: (context, req, res) => {
      res.send({
        ...context.get('json'),
        '@id': `${req.protocol || 'http'}://${req.headers.host}${
          req.params[0]
        }`,
        '@type': context.get('type'),
        id: context.get('id'),
      });
    },
  },
];
