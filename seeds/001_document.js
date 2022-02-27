exports.seed = (knex) =>
  knex('document')
    .del()
    .then(() =>
      knex('document').insert([
        {
          uuid: '4ba6ac12-2a02-40be-a76f-9067ce98ed47',
          id: 'site',
          path: '/',
          type: 'site',
          position_in_parent: 0,
          json: {
            title: 'Welcome to Volto',
            description:
              'Congratulations! You have successfully installed Volto.',
            blocks: {
              '79ba8858-1dd3-4719-b731-5951e32fbf79': {
                '@type': 'title',
              },
              '495efb73-cbdd-4bef-935a-a56f70a20854': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      key: '9f35d',
                      text: "If you're seeing this instead of the web site you were expecting, the owner of this web site has just installed Volto. Do not contact the Volto Team or the Volto support channels about this.",
                      type: 'unstyled',
                      depth: 0,
                      inlineStyleRanges: [],
                      entityRanges: [],
                      data: {},
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: [
                '79ba8858-1dd3-4719-b731-5951e32fbf79',
                '495efb73-cbdd-4bef-935a-a56f70a20854',
              ],
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
            blocks: {
              '79ba8858-1dd3-4719-b731-5951e32fbf79': {
                '@type': 'title',
              },
              'e3d1a578-d467-4666-9781-0cc9eeed31ed': {
                '@type': 'listing',
                query: [],
                block: 'e3d1a578-d467-4666-9781-0cc9eeed31ed',
                variation: 'default',
              },
            },
            blocks_layout: {
              items: [
                '79ba8858-1dd3-4719-b731-5951e32fbf79',
                'e3d1a578-d467-4666-9781-0cc9eeed31ed',
              ],
            },
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
            blocks: {
              '79ba8858-1dd3-4719-b731-5951e32fbf79': {
                '@type': 'title',
              },
              'e3d1a578-d467-4666-9781-0cc9eeed31ed': {
                '@type': 'listing',
                query: [],
                block: 'e3d1a578-d467-4666-9781-0cc9eeed31ed',
                variation: 'default',
              },
            },
            blocks_layout: {
              items: [
                '79ba8858-1dd3-4719-b731-5951e32fbf79',
                'e3d1a578-d467-4666-9781-0cc9eeed31ed',
              ],
            },
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
            blocks: {
              '79ba8858-1dd3-4719-b731-5951e32fbf79': {
                '@type': 'title',
              },
              'e3d1a578-d467-4666-9781-0cc9eeed31ed': {
                '@type': 'listing',
                query: [],
                block: 'e3d1a578-d467-4666-9781-0cc9eeed31ed',
                variation: 'default',
              },
            },
            blocks_layout: {
              items: [
                '79ba8858-1dd3-4719-b731-5951e32fbf79',
                'e3d1a578-d467-4666-9781-0cc9eeed31ed',
              ],
            },
          },
        },
      ]),
    );
