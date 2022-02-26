exports.seed = (knex) =>
  knex('role')
    .del()
    .then(() =>
      knex('role').insert([
        {
          id: 'anonymous',
          label: 'Anonymous',
        },
        {
          id: 'authenticated',
          label: 'Authenticated',
        },
        {
          id: 'owner',
          label: 'Owner',
        },
        {
          id: 'manager',
          label: 'Manager',
        },
        {
          id: 'contributer',
          label: 'Contributer',
        },
        {
          id: 'editor',
          label: 'Editor',
        },
        {
          id: 'reviewer',
          label: 'Reviewer',
        },
        {
          id: 'reader',
          label: 'Reader',
        },
      ]),
    );
