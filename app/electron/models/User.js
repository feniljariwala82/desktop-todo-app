const knex = require('../config/database');
const { DateTime } = require('luxon');
const BaseSchema = require('./BaseSchema');
const HashService = require('../services/HashService');

class User extends BaseSchema {
  /**
   * table name
   */
  static table_name = 'users';

  static createUser = async ({
    firstName = '',
    lastName = '',
    email = '',
    password = '',
  }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.findBy(this.table_name, 'email', email);
        if (user) {
          reject('User with this email already exists');
        }

        try {
          await knex(this.table_name).insert({
            first_name: firstName,
            last_name: lastName,
            email,
            password: HashService.bcrypt(password),
            created_at: DateTime.now(),
          });
        } catch (error) {
          console.error(error);
          reject(error.message);
        }

        resolve('User created successfully');
      } catch (error) {
        console.error(error);
        reject(error.message);
      }
    });
  };
}

module.exports = User;
