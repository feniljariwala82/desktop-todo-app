const log = require('electron-log');

/* eslint-disable no-tabs */
const tasks01 = (db) => {
  try {
    db.run(`CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title VARCHAR(50) NOT NULL,
      description VARCHAR(600) NOT NULL,
      priority VARCHAR(60) NOT NULL DEFAULT 'important',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
      user_id INT NOT NULL,     
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
  )`);

    console.log('02_tasks migration successfully executed');
  } catch (error) {
    log.error(error);
    console.error(error.message);
  }
};

module.exports = tasks01;
