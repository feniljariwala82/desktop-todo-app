require('dotenv').config();
const path = require('path');

const myDBConfig = {
  client: 'sqlite3',
  connection: {
    filename: process.env.DATABASE_PATH,
  },
  migrations: {
    directory: path.join(__dirname, '..', 'migrations'),
  },
  useNullAsDefault: true,
  pool: {
    afterCreate: function (conn, done) {
      conn.run("PRAGMA KEY = 'password'");
      done();
    },
  },
};

const knex = require('knex')(myDBConfig);

module.exports = knex;
