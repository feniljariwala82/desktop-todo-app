const validator = require('validator');
const User = require('../models/User');
const AuthService = require('../services/AuthService');

class AuthController {
  static login = async ({ email = '', password = '' }) => {
    return new Promise(async (resolve, reject) => {
      // validating
      if (
        validator.default.isEmpty(email) ||
        validator.default.isEmpty(password)
      ) {
        reject('Please enter all the fields marked as *');
      }

      if (!validator.default.isEmail(email)) {
        reject('Please enter valid email');
      }

      // fetching user
      try {
        const result = await AuthService.login(email, password);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  static signup = async ({
    email = '',
    password = '',
    firstName = '',
    lastName = '',
  }) => {
    return new Promise(async (resolve, reject) => {
      // validating
      if (
        validator.default.isEmpty(email) ||
        validator.default.isEmpty(password) ||
        validator.default.isEmpty(firstName) ||
        validator.default.isEmpty(lastName)
      ) {
        reject('Please enter all the fields marked as *');
      }

      if (!validator.default.isEmail(email)) {
        reject('Please enter valid email');
      }

      if (!validator.default.isLength(password, { min: 8 })) {
        reject('Password should be 8 characters long');
      }

      if (!validator.default.isEmail(email)) {
        reject('Please enter valid email');
      }

      try {
        const result = await User.createUser({
          email,
          password,
          firstName,
          lastName,
        });
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };
}

module.exports = AuthController;
