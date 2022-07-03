const path = require('path');

// Update with your config settings.

console.log(path.join(__dirname, 'databases', 'todo_hut_app.sqlite'));

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'databases', 'todo_hut_app.sqlite'),
    },
    migrations: {
      directory: path.join(__dirname, '.', 'app', 'electron', 'migrations'),
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: function (conn, done) {
        conn.run("PRAGMA KEY = 'password'");
        done();
      },
    },
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'databases', 'todo_hut_app.sqlite'),
    },
    migrations: {
      directory: path.join(__dirname, '.', 'app', 'electron', 'migrations'),
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: function (conn, done) {
        conn.run("PRAGMA KEY = 'password'");
        done();
      },
    },
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'databases', 'todo_hut_app.sqlite'),
    },
    migrations: {
      directory: path.join(__dirname, '.', 'app', 'electron', 'migrations'),
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: function (conn, done) {
        conn.run("PRAGMA KEY = 'password'");
        done();
      },
    },
  },
};
