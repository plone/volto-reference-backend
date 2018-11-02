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
        layouts: [
          'document_view',
          'album_view',
          'event_listing',
          'full_view',
          'listing_view',
          'summary_view',
          'tabular_view',
        ],
        default_layout: 'document_view',
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
        layouts: [
          'album_view',
          'event_listing',
          'full_view',
          'listing_view',
          'summary_view',
          'tabular_view',
        ],
        default_layout: 'listing_view',
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
        layouts: [
          'document_view',
          'album_view',
          'event_listing',
          'full_view',
          'listing_view',
          'summary_view',
          'tabular_view',
        ],
        default_layout: 'document_view',
      },
    },
  ]);
