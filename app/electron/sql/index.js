const db = require('../config/database');
const users01 = require('./migrations/01_users');
const tasks02 = require('./migrations/02_tasks');

const SCHEMA_VERSIONS = [users01, tasks02];

class Migration {
  static tables = ['users', 'tasks'];

  static run = () => {
    for (let index = 0; index < SCHEMA_VERSIONS.length; index++) {
      const runSchemaUpdate = SCHEMA_VERSIONS[index];

      runSchemaUpdate(db);
    }
  };

  static rollback = () => {
    for (let index = 0; index < this.tables.length; index++) {
      const tableName = this.tables[index];

      // dropping all the tables
      db.exec(`DROP TABLE IF EXISTS ${tableName}`);
    }
  };
}

module.exports = Migration;
