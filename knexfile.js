const path = require("path");

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "databases", "todo_hut_app.sqlite"),
    },
    migrations: {
      directory: path.join(__dirname, ".", "app", "electron", "migrations"),
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "databases", "todo_hut_app.sqlite"),
    },
    migrations: {
      directory: path.join(__dirname, ".", "app", "electron", "migrations"),
    },
    useNullAsDefault: true,
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "databases", "todo_hut_app.sqlite"),
    },
    migrations: {
      directory: path.join(__dirname, ".", "app", "electron", "migrations"),
    },
    useNullAsDefault: true,
  },
};
