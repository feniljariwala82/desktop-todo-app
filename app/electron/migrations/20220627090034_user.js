const table_name = "users";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(table_name, function (table) {
    table.increments().primary();
    table.string("email", 255).unique().notNullable();
    table.string("password", 180).notNullable();
    table.string("first_name", 50).notNullable();
    table.string("last_name", 50).notNullable();
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(table_name);
};
