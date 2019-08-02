const db = require('../db');
const Sequelize = require('sequelize');
//MODEL
const User = db.define('user', {
  id: {
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    type: Sequelize.UUID
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  class: {
    type: Sequelize.ENUM('warrior', 'mage', 'rouge')
  }
});
//EXPORT
module.exports = User;
