exports.seed = knex =>
  knex('document').insert([
    {
      uuid: '4ba6ac12-2a02-40be-a76f-9067ce98ed47',
      id: 'root',
      type: 'site',
      position_in_parent: 0,
      json: {},
    },
  ]);
