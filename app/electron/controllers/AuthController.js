const validator = require('validator');
const User = require('../models/User');

class AuthController {
  static login = async ({ email = '', password = '' }) => {
    // validating
    if (
      validator.default.isEmpty(email) ||
      validator.default.isEmpty(password)
    ) {
      return Promise.reject('Please enter all the fields marked as *');
    }

    if (!validator.default.isEmail(email)) {
      return Promise.reject('Please enter valid email');
    }

    // fetching user
  };

  static signup = async ({
    email = '',
    password = '',
    firstName = '',
    lastName = '',
  }) => {
    // validating
    if (
      validator.default.isEmpty(email) ||
      validator.default.isEmpty(password) ||
      validator.default.isEmpty(firstName) ||
      validator.default.isEmpty(lastName)
    ) {
      return Promise.reject('Please enter all the fields marked as *');
    }

    if (!validator.default.isEmail(email)) {
      return Promise.reject('Please enter valid email');
    }

    if (!validator.default.isLength(password, { min: 8 })) {
      return Promise.reject('Password should be 8 characters long');
    }

    if (!validator.default.isEmail(email)) {
      return Promise.reject('Please enter valid email');
    }

    try {
      const result = await User.createUser({
        email,
        password,
        firstName,
        lastName,
      });
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

module.exports = AuthController;
