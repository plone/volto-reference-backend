exports.seed = knex =>
  knex('document').insert([
    {
      uuid: '4ba6ac12-2a02-40be-a76f-9067ce98ed47',
      id: 'site',
      type: 'site',
      position_in_parent: 0,
      json: {
        title: 'Site',
      },
    },
    {
      uuid: '5ba6ac12-2a02-40be-a76f-9067ce98ed47',
      parent: '4ba6ac12-2a02-40be-a76f-9067ce98ed47',
      id: 'news',
      type: 'folder',
      position_in_parent: 0,
      json: {
        title: 'News',
      },
    },
    {
      uuid: '6ba6ac12-2a02-40be-a76f-9067ce98ed47',
      parent: '4ba6ac12-2a02-40be-a76f-9067ce98ed47',
      id: 'events',
      type: 'folder',
      position_in_parent: 1,
      json: {
        title: 'Events',
      },
    },
    {
      uuid: '7ba6ac12-2a02-40be-a76f-9067ce98ed47',
      parent: '4ba6ac12-2a02-40be-a76f-9067ce98ed47',
      id: 'users',
      type: 'folder',
      position_in_parent: 2,
      json: {
        title: 'Users',
      },
    },
  ]);
