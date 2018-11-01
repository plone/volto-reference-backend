export default [
  {
    op: 'get',
    view: '/@navigation',
    handler: (context, req, res) => {
      res.send('/@navigation');
    },
  },
];
