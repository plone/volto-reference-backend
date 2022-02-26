exports.seed = (knex) =>
  knex('user_role_document')
    .del()
    .then(() =>
      knex('user_role_document').insert([
        {
          user: 'admin',
          role: 'manager',
          document: '4ba6ac12-2a02-40be-a76f-9067ce98ed47',
        },
      ]),
    );
