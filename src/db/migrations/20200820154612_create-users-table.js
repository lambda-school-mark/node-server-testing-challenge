exports.up = function (knex) {
  return knex.schema.createTable("users", (Table) => {
    Table.increments().unique();

    Table.string("username", 255).unique().notNullable();
    Table.string("password", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
