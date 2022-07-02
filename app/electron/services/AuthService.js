const User = require('../models/User');
const HashService = require('../services/HashService');

class AuthService {
  /**
   * @description log in the user
   * @param {string} email
   * @param {string} password
   * @returns Promise
   */
  static login = async (email = '', password = '') => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await User.findByOrFail('users', 'email', email);

        // verifying password
        try {
          HashService.verify(user.password, password);
        } catch (error) {
          reject(error.message);
        }

        // password verified
        resolve('Logged in');
      } catch (error) {
        reject('User not found');
      }
    });
  };
}

module.exports = AuthService;
