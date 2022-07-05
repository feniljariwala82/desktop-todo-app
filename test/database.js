/* eslint-disable no-tabs */
require('dotenv').config();
const path = require('path');

const databasePath = path.resolve(
  __dirname,
  '..',
  'databases',
  'todo_hut_app.db',
);

const db = require('better-sqlite3')(databasePath);

db.serialize(() => {
  // This is the default, but it is good to specify explicitly:
  db.run('PRAGMA cipher_compatibility = 4');

  db.run("PRAGMA key = 'simple'");
});

db.run(`CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
   created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)`);

module.exports = db;
