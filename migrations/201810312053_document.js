exports.up = (knex) =>
  knex.schema.createTable('document', (table) => {
    table.uuid('uuid').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table
      .uuid('parent')
      .references('document.uuid')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('id').notNull();
    table.string('path').notNull();
    table
      .string('type')
      .references('type.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.integer('position_in_parent');
    table.json('json').notNull();
  });

exports.down = (knex) => knex.schema.dropTable('document');
