exports.up = knex =>
  knex.schema.createTable('user', table => {
    table
      .string('id')
      .primary()
      .notNull();
    table.string('password').notNull();
    table.string('fullname');
  });

exports.down = knex => knex.schema.dropTable('user');
