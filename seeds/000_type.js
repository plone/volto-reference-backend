exports.seed = (knex) =>
  knex('type')
    .del()
    .then(() =>
      knex('type').insert([
        {
          id: 'site',
          title: 'Site',
          addable: false,
          schema: {
            fieldsets: [
              {
                fields: ['title', 'description', 'text', 'changeNote'],
                id: 'default',
                title: 'Default',
              },
              {
                fields: [
                  'allow_discussion',
                  'exclude_from_nav',
                  'id',
                  'versioning_enabled',
                  'table_of_contents',
                ],
                id: 'settings',
                title: 'Settings',
              },
              {
                fields: ['subjects', 'language', 'relatedItems'],
                id: 'categorization',
                title: 'Categorization',
              },
              {
                fields: ['effective', 'expires'],
                id: 'dates',
                title: 'Dates',
              },
              {
                fields: ['creators', 'contributors', 'rights'],
                id: 'ownership',
                title: 'Ownership',
              },
              {
                fields: ['blocks', 'blocks_layout'],
                id: 'layout',
                title: 'Layout',
              },
            ],
            properties: {
              allow_discussion: {
                choices: [
                  ['True', 'Yes'],
                  ['False', 'No'],
                ],
                description: 'Allow discussion for this content object.',
                enum: ['True', 'False'],
                enumNames: ['Yes', 'No'],
                title: 'Allow discussion',
                type: 'string',
              },
              blocks: {
                default: {},
                description:
                  'The JSON representation of the object blocks information. Must be a JSON object.',
                title: 'Blocks',
                type: 'dict',
                widget: 'json',
              },
              blocks_layout: {
                default: {
                  items: [],
                },
                description:
                  'The JSON representation of the object blocks layout. Must be a JSON array.',
                title: 'Blocks Layout',
                type: 'dict',
                widget: 'json',
              },
              changeNote: {
                description:
                  'Enter a comment that describes the changes you made.',
                title: 'Change Note',
                type: 'string',
              },
              contributors: {
                additionalItems: true,
                description:
                  'The names of people that have contributed to this item. Each contributor should be on a separate line.',
                items: {
                  description: '',
                  title: '',
                  type: 'string',
                },
                title: 'Contributors',
                type: 'array',
                uniqueItems: true,
                vocabulary: 'plone.app.vocabularies.Users',
              },
              creators: {
                additionalItems: true,
                description:
                  'Persons responsible for creating the content of this item. Please enter a list of user names, one per line. The principal creator should come first.',
                items: {
                  description: '',
                  title: '',
                  type: 'string',
                },
                title: 'Creators',
                type: 'array',
                uniqueItems: true,
                vocabulary: 'plone.app.vocabularies.Users',
              },
              description: {
                description: 'Used in item listings and search results.',
                minLength: 0,
                title: 'Summary',
                type: 'string',
                widget: 'textarea',
              },
              effective: {
                description:
                  'If this date is in the future, the content will not show up in listings and searches until this date.',
                title: 'Publishing Date',
                type: 'string',
                widget: 'datetime',
              },
              exclude_from_nav: {
                default: false,
                description:
                  'If selected, this item will not appear in the navigation tree',
                title: 'Exclude from navigation',
                type: 'boolean',
              },
              expires: {
                description:
                  'When this date is reached, the content will no longer be visible in listings and searches.',
                title: 'Expiration Date',
                type: 'string',
                widget: 'datetime',
              },
              id: {
                description: 'This name will be displayed in the URL.',
                title: 'Short name',
                type: 'string',
              },
              language: {
                choices: [['en', 'English']],
                default: 'en',
                description: '',
                enum: ['en'],
                enumNames: ['English'],
                title: 'Language',
                type: 'string',
              },
              relatedItems: {
                additionalItems: true,
                default: [],
                description: '',
                items: {
                  description: '',
                  title: 'Related',
                  type: 'string',
                },
                pattern_options: {
                  recentlyUsed: true,
                },
                title: 'Related Items',
                type: 'array',
                uniqueItems: true,
                vocabulary: 'plone.app.vocabularies.Catalog',
              },
              rights: {
                description:
                  'Copyright statement or other rights information on this item.',
                minLength: 0,
                title: 'Rights',
                type: 'string',
                widget: 'textarea',
              },
              subjects: {
                choices: [
                  ['Plone', 'Plone'],
                  ['Tokyo', 'Tokyo'],
                ],
                description:
                  'Tags are commonly used for ad-hoc organization of content.',
                enum: ['Plone', 'Tokyo'],
                enumNames: ['Plone', 'Tokyo'],
                title: 'Tags',
                type: 'string',
                vocabulary: 'plone.app.vocabularies.Keywords',
              },
              table_of_contents: {
                description:
                  'If selected, this will show a table of contents at the top of the page.',
                title: 'Table of contents',
                type: 'boolean',
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
              versioning_enabled: {
                default: true,
                description: 'Enable/disable versioning for this document.',
                title: 'Versioning enabled',
                type: 'boolean',
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
          addable: true,
          schema: {
            fieldsets: [
              {
                fields: ['title', 'description'],
                id: 'default',
                title: 'Default',
              },
              {
                fields: ['subjects', 'language', 'relatedItems'],
                id: 'categorization',
                title: 'Categorization',
              },
              {
                fields: ['effective', 'expires'],
                id: 'dates',
                title: 'Dates',
              },
              {
                fields: ['creators', 'contributors', 'rights'],
                id: 'ownership',
                title: 'Ownership',
              },
              {
                fields: [
                  'allow_discussion',
                  'exclude_from_nav',
                  'id',
                  'nextPreviousEnabled',
                ],
                id: 'settings',
                title: 'Settings',
              },
              {
                fields: ['blocks', 'blocks_layout'],
                id: 'layout',
                title: 'Layout',
              },
            ],
            properties: {
              allow_discussion: {
                choices: [
                  ['True', 'Yes'],
                  ['False', 'No'],
                ],
                description: 'Allow discussion for this content object.',
                enum: ['True', 'False'],
                enumNames: ['Yes', 'No'],
                title: 'Allow discussion',
                type: 'string',
              },
              blocks: {
                default: {},
                description:
                  'The JSON representation of the object blocks information. Must be a JSON object.',
                title: 'Blocks',
                type: 'dict',
                widget: 'json',
              },
              blocks_layout: {
                default: {
                  items: [],
                },
                description:
                  'The JSON representation of the object blocks layout. Must be a JSON array.',
                title: 'Blocks Layout',
                type: 'dict',
                widget: 'json',
              },
              contributors: {
                additionalItems: true,
                description:
                  'The names of people that have contributed to this item. Each contributor should be on a separate line.',
                items: {
                  description: '',
                  title: '',
                  type: 'string',
                },
                title: 'Contributors',
                type: 'array',
                uniqueItems: true,
                vocabulary: 'plone.app.vocabularies.Users',
              },
              creators: {
                additionalItems: true,
                description:
                  'Persons responsible for creating the content of this item. Please enter a list of user names, one per line. The principal creator should come first.',
                items: {
                  description: '',
                  title: '',
                  type: 'string',
                },
                title: 'Creators',
                type: 'array',
                uniqueItems: true,
                vocabulary: 'plone.app.vocabularies.Users',
              },
              description: {
                description: 'Used in item listings and search results.',
                minLength: 0,
                title: 'Summary',
                type: 'string',
                widget: 'textarea',
              },
              effective: {
                description:
                  'If this date is in the future, the content will not show up in listings and searches until this date.',
                title: 'Publishing Date',
                type: 'string',
                widget: 'datetime',
              },
              exclude_from_nav: {
                default: false,
                description:
                  'If selected, this item will not appear in the navigation tree',
                title: 'Exclude from navigation',
                type: 'boolean',
              },
              expires: {
                description:
                  'When this date is reached, the content will no longer be visible in listings and searches.',
                title: 'Expiration Date',
                type: 'string',
                widget: 'datetime',
              },
              id: {
                description: 'This name will be displayed in the URL.',
                title: 'Short name',
                type: 'string',
              },
              language: {
                choices: [['en', 'English']],
                default: 'en',
                description: '',
                enum: ['en'],
                enumNames: ['English'],
                title: 'Language',
                type: 'string',
              },
              nextPreviousEnabled: {
                default: false,
                description:
                  'This enables next/previous widget on content items contained in this folder.',
                title: 'Enable next previous navigation',
                type: 'boolean',
              },
              relatedItems: {
                additionalItems: true,
                default: [],
                description: '',
                items: {
                  description: '',
                  title: 'Related',
                  type: 'string',
                },
                pattern_options: {
                  recentlyUsed: true,
                },
                title: 'Related Items',
                type: 'array',
                uniqueItems: true,
                vocabulary: 'plone.app.vocabularies.Catalog',
              },
              rights: {
                description:
                  'Copyright statement or other rights information on this item.',
                minLength: 0,
                title: 'Rights',
                type: 'string',
                widget: 'textarea',
              },
              subjects: {
                choices: [
                  ['Plone', 'Plone'],
                  ['Tokyo', 'Tokyo'],
                ],
                description:
                  'Tags are commonly used for ad-hoc organization of content.',
                enum: ['Plone', 'Tokyo'],
                enumNames: ['Plone', 'Tokyo'],
                title: 'Tags',
                type: 'string',
                vocabulary: 'plone.app.vocabularies.Keywords',
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
          addable: true,
          schema: {
            fieldsets: [
              {
                fields: ['title', 'description', 'text', 'changeNote'],
                id: 'default',
                title: 'Default',
              },
              {
                fields: [
                  'allow_discussion',
                  'exclude_from_nav',
                  'id',
                  'versioning_enabled',
                  'table_of_contents',
                ],
                id: 'settings',
                title: 'Settings',
              },
              {
                fields: ['subjects', 'language', 'relatedItems'],
                id: 'categorization',
                title: 'Categorization',
              },
              {
                fields: ['effective', 'expires'],
                id: 'dates',
                title: 'Dates',
              },
              {
                fields: ['creators', 'contributors', 'rights'],
                id: 'ownership',
                title: 'Ownership',
              },
              {
                fields: ['blocks', 'blocks_layout'],
                id: 'layout',
                title: 'Layout',
              },
            ],
            properties: {
              allow_discussion: {
                choices: [
                  ['True', 'Yes'],
                  ['False', 'No'],
                ],
                description: 'Allow discussion for this content object.',
                enum: ['True', 'False'],
                enumNames: ['Yes', 'No'],
                title: 'Allow discussion',
                type: 'string',
              },
              blocks: {
                default: {},
                description:
                  'The JSON representation of the object blocks information. Must be a JSON object.',
                title: 'Blocks',
                type: 'dict',
                widget: 'json',
              },
              blocks_layout: {
                default: {
                  items: [],
                },
                description:
                  'The JSON representation of the object blocks layout. Must be a JSON array.',
                title: 'Blocks Layout',
                type: 'dict',
                widget: 'json',
              },
              changeNote: {
                description:
                  'Enter a comment that describes the changes you made.',
                title: 'Change Note',
                type: 'string',
              },
              contributors: {
                additionalItems: true,
                description:
                  'The names of people that have contributed to this item. Each contributor should be on a separate line.',
                items: {
                  description: '',
                  title: '',
                  type: 'string',
                },
                title: 'Contributors',
                type: 'array',
                uniqueItems: true,
                vocabulary: 'plone.app.vocabularies.Users',
              },
              creators: {
                additionalItems: true,
                description:
                  'Persons responsible for creating the content of this item. Please enter a list of user names, one per line. The principal creator should come first.',
                items: {
                  description: '',
                  title: '',
                  type: 'string',
                },
                title: 'Creators',
                type: 'array',
                uniqueItems: true,
                vocabulary: 'plone.app.vocabularies.Users',
              },
              description: {
                description: 'Used in item listings and search results.',
                minLength: 0,
                title: 'Summary',
                type: 'string',
                widget: 'textarea',
              },
              effective: {
                description:
                  'If this date is in the future, the content will not show up in listings and searches until this date.',
                title: 'Publishing Date',
                type: 'string',
                widget: 'datetime',
              },
              exclude_from_nav: {
                default: false,
                description:
                  'If selected, this item will not appear in the navigation tree',
                title: 'Exclude from navigation',
                type: 'boolean',
              },
              expires: {
                description:
                  'When this date is reached, the content will no longer be visible in listings and searches.',
                title: 'Expiration Date',
                type: 'string',
                widget: 'datetime',
              },
              id: {
                description: 'This name will be displayed in the URL.',
                title: 'Short name',
                type: 'string',
              },
              language: {
                choices: [['en', 'English']],
                default: 'en',
                description: '',
                enum: ['en'],
                enumNames: ['English'],
                title: 'Language',
                type: 'string',
              },
              relatedItems: {
                additionalItems: true,
                default: [],
                description: '',
                items: {
                  description: '',
                  title: 'Related',
                  type: 'string',
                },
                pattern_options: {
                  recentlyUsed: true,
                },
                title: 'Related Items',
                type: 'array',
                uniqueItems: true,
                vocabulary: 'plone.app.vocabularies.Catalog',
              },
              rights: {
                description:
                  'Copyright statement or other rights information on this item.',
                minLength: 0,
                title: 'Rights',
                type: 'string',
                widget: 'textarea',
              },
              subjects: {
                choices: [
                  ['Plone', 'Plone'],
                  ['Tokyo', 'Tokyo'],
                ],
                description:
                  'Tags are commonly used for ad-hoc organization of content.',
                enum: ['Plone', 'Tokyo'],
                enumNames: ['Plone', 'Tokyo'],
                title: 'Tags',
                type: 'string',
                vocabulary: 'plone.app.vocabularies.Keywords',
              },
              table_of_contents: {
                description:
                  'If selected, this will show a table of contents at the top of the page.',
                title: 'Table of contents',
                type: 'boolean',
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
              versioning_enabled: {
                default: true,
                description: 'Enable/disable versioning for this document.',
                title: 'Versioning enabled',
                type: 'boolean',
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
      ]),
    );
