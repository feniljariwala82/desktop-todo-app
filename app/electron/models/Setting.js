const BaseSchema = require('./BaseSchema');
const { auth } = require('../config/constants');

class Settings extends BaseSchema {
  /**
   * table name
   */
  static table_name = 'settings';

  static set = async (key = '', value = '') => {};

  static get = async () => {};

  static delete = async () => {};
}

module.exports = Settings;
