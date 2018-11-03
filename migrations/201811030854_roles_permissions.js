exports.up = knex =>
  knex.schema
    .createTable('role', table => {
      table.string('id').primary();
      table.string('label');
    })
    .then(() =>
      knex.schema.createTable('permission', table => {
        table.string('id').primary();
        table.string('label');
      }),
    )
    .then(() =>
      knex.schema.createTable('role_permission', table => {
        table
          .uuid('id')
          .primary()
          .defaultTo(knex.raw('uuid_generate_v4()'));
        table
          .string('role')
          .notNull()
          .references('role.id');
        table
          .string('permission')
          .notNull()
          .references('permission.id');
      }),
    )
    .then(() =>
      knex.schema.createTable('user_role_document', table => {
        table
          .uuid('id')
          .primary()
          .defaultTo(knex.raw('uuid_generate_v4()'));
        table
          .string('user')
          .notNull()
          .references('user.id');
        table
          .string('role')
          .notNull()
          .references('role.id');
        table
          .uuid('document')
          .notNull()
          .references('document.uuid');
      }),
    );

exports.down = knex =>
  knex.schema
    .dropTable('user_role_document')
    .then(() => knex.schema.dropTable('role_permission'))
    .then(() => knex.schema.dropTable('permission'))
    .then(() => knex.schema.dropTable('role'));
