exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('user_id').notNullable().unique().primary();
      table.string('email').notNullable().unique();
      table.string('first_name');
      table.string('last_name');
      table.string('role').notNullable().default('user');
      table.timestamps(false, true);
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('profiles');
};
