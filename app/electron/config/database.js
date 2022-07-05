/* eslint-disable no-tabs */
require('dotenv').config();
const sqlite3 = require('@journeyapps/sqlcipher').verbose();
const log = require('electron-log');
const { cacheGet } = require('../services/CacheService');
const constants = require('./constants');

const { DATABASE_PATH, NODE_ENV } = constants.application;

let db;

const databasePath = cacheGet(DATABASE_PATH);
if (cacheGet(NODE_ENV) && databasePath) {
  db = new sqlite3.Database(databasePath);
} else if (process.env.DATABASE_PATH) {
  db = new sqlite3.Database(process.env.DATABASE_PATH);
} else {
  log.error('Database path not found');
}

db.serialize(() => {
  // This is the default, but it is good to specify explicitly:
  db.run('PRAGMA cipher_compatibility = 4');
  db.run("PRAGMA key = 'simple'");
});

module.exports = db;
