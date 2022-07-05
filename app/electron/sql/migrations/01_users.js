const log = require('electron-log');

/* eslint-disable no-tabs */
const users01 = (db) => {
  try {
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name VARCHAR(50) NOT NULL,
      last_name VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
  )`);

    console.log('01_users migration successfully executed');
  } catch (error) {
    log.error(error);
    console.error(error.message);
  }
};

module.exports = users01;
