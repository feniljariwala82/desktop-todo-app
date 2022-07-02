const knex = require('../config/database');

class BaseSchema {
  /**
   * @description finds one record
   * @param {string} tableName
   * @param {number} id
   * @returns Promise
   */
  static find = async (tableName, id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await knex(tableName).where('id', id).first();
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  };

  /**
   * @description finds or fails finding one record
   * @param {string} tableName
   * @param {number} id
   * @returns Promise
   */
  static findOrFail = async (tableName, id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await knex(tableName).where('id', id).first();
        if (!result) {
          const msg = `Row not found with id ${id}`;
          console.error(msg);
          reject(msg);
        }
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  };

  /**
   * @description finds one record using key and value
   * @param key key of the row
   * @param value value of the row
   * @returns Promise
   */
  static findBy = async (tableName, key, value) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await knex(tableName).where(key, value).first();
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  };

  /**
   * @description finds or fails one record using key and value
   * @param key key of the row
   * @param value value of the row
   * @returns Promise
   */
  static findByOrFail = async (tableName, key, value) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await knex(tableName).where(key, value).first();
        if (!result) {
          const msg = `Record not found`;
          console.error(msg);
          reject(msg);
        }
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  };
}

module.exports = BaseSchema;
