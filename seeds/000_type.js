exports.seed = knex =>
  knex('type').insert([
    {
      id: 'site',
      title: 'Site',
      schema: {
        fieldsets: [
          {
            fields: ['title', 'description', 'text'],
            id: 'default',
            title: 'Default',
          },
        ],
        properties: {
          description: {
            description: 'Used in item listings and search results.',
            minLength: 0,
            title: 'Summary',
            type: 'string',
            widget: 'textarea',
          },
          text: {
            description: '',
            title: 'Text',
            type: 'string',
            widget: 'richtext',
          },
          title: {
            description: '',
            title: 'Title',
            type: 'string',
          },
        },
        required: ['title'],
      },
    },
    {
      id: 'folder',
      title: 'Folder',
      schema: {
        fieldsets: [
          {
            fields: ['title', 'description'],
            id: 'default',
            title: 'Default',
          },
        ],
        properties: {
          description: {
            description: 'Used in item listings and search results.',
            minLength: 0,
            title: 'Summary',
            type: 'string',
            widget: 'textarea',
          },
          title: {
            description: '',
            title: 'Title',
            type: 'string',
          },
        },
        required: ['title'],
      },
    },
    {
      id: 'page',
      title: 'Page',
      schema: {
        fieldsets: [
          {
            fields: ['title', 'description', 'text'],
            id: 'default',
            title: 'Default',
          },
        ],
        properties: {
          description: {
            description: 'Used in item listings and search results.',
            minLength: 0,
            title: 'Summary',
            type: 'string',
            widget: 'textarea',
          },
          text: {
            description: '',
            title: 'Text',
            type: 'string',
            widget: 'richtext',
          },
          title: {
            description: '',
            title: 'Title',
            type: 'string',
          },
        },
        required: ['title'],
      },
    },
  ]);
