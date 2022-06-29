const table_name = "tasks";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(table_name, function (table) {
    table.increments().primary();
    table.string("title", 50).notNullable();
    table.string("description", 600).notNullable();
    table
      .enu("priority", ["important", "unimportant", "urgent", "future_scope"])
      .notNullable()
      .defaultTo("important");
    table
      .integer("user_id")
      .unsigned()
      .references("users.id")
      .onDelete("CASCADE")
      .notNullable();
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
