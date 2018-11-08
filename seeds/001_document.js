exports.seed = knex =>
  knex('document').insert([
    {
      uuid: '4ba6ac12-2a02-40be-a76f-9067ce98ed47',
      id: 'site',
      path: '/',
      type: 'site',
      position_in_parent: 0,
      json: {
        title: 'Welcome to Volto',
        description: 'Congratulations! You have successfully installed Volto.',
        layout: 'document_view',
        text: {
          'content-type': 'text/html',
          data:
            "If you're seeing this instead of the web site you were expecting, the owner of this web site has just installed Volto. Do not contact the Volto Team or the Volto support channels about this.",
        },
      },
    },
    {
      uuid: '5ba6ac12-2a02-40be-a76f-9067ce98ed47',
      parent: '4ba6ac12-2a02-40be-a76f-9067ce98ed47',
      id: 'news',
      path: '/news',
      type: 'folder',
      position_in_parent: 0,
      json: {
        title: 'News',
        layout: 'listing_view',
      },
    },
    {
      uuid: '6ba6ac12-2a02-40be-a76f-9067ce98ed47',
      parent: '4ba6ac12-2a02-40be-a76f-9067ce98ed47',
      id: 'events',
      path: '/events',
      type: 'folder',
      position_in_parent: 1,
      json: {
        title: 'Events',
        layout: 'listing_view',
      },
    },
    {
      uuid: '7ba6ac12-2a02-40be-a76f-9067ce98ed47',
      parent: '4ba6ac12-2a02-40be-a76f-9067ce98ed47',
      id: 'users',
      path: '/users',
      type: 'folder',
      position_in_parent: 2,
      json: {
        title: 'Users',
        layout: 'listing_view',
      },
    },
  ]);
