const table_name = 'settings';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(table_name, function (table) {
    table.increments().primary();
    table.string('key').notNullable();
    table.text('value').notNullable();
    table.timestamp('created_at', { useTz: true });
    table.timestamp('updated_at', { useTz: true });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(table_name);
};
