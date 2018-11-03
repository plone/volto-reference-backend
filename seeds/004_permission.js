exports.seed = knex =>
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
  ]);
