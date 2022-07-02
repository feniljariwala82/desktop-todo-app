const bcrypt = require('bcrypt');

class HashService {
  static saltRounds = 12;

  /**
   * @description hashes the plain text
   * @param {string} plainText
   * @returns Hashed string
   */
  static bcrypt = (plainText = '') => {
    const hash = bcrypt.hashSync(plainText, this.saltRounds);
    return hash;
  };

  /**
   * @description verifies the password is valid or not
   * @param {string} hashedText
   * @param {string} plainText
   * @returns
   */
  static verify = (hashedText = '', plainText = '') => {
    const value = bcrypt.compareSync(plainText, hashedText);
    if (value) {
      return 'Password matched';
    } else {
      throw new Error('Invalid password');
    }
  };
}

module.exports = HashService;
