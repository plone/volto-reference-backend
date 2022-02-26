exports.seed = (knex) =>
  knex('permission')
    .del()
    .then(() =>
      knex('permission').insert([
        {
          id: 'view',
          label: 'View',
        },
        {
          id: 'add',
          label: 'Add',
        },
        {
          id: 'modify',
          label: 'Modify',
        },
        {
          id: 'delete',
          label: 'Delete',
        },
      ]),
    );
