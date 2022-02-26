exports.seed = (knex) =>
  knex('role_permission')
    .del()
    .then(() =>
      knex('role_permission').insert([
        {
          role: 'anonymous',
          permission: 'view',
        },
        {
          role: 'authenticated',
          permission: 'view',
        },
        {
          role: 'contributer',
          permission: 'add',
        },
        {
          role: 'manager',
          permission: 'add',
        },
        {
          role: 'owner',
          permission: 'add',
        },
        {
          role: 'editor',
          permission: 'modify',
        },
        {
          role: 'owner',
          permission: 'modify',
        },
        {
          role: 'manager',
          permission: 'modify',
        },
        {
          role: 'editor',
          permission: 'delete',
        },
        {
          role: 'owner',
          permission: 'delete',
        },
        {
          role: 'manager',
          permission: 'delete',
        },
      ]),
    );
