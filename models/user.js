const Sequelize = require('sequelize')
const db = require('../routes/database.js')

module.exports = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  //   ,
  //   created: {
  //     type: Sequelize.DATE,
  //     defaultValue: Sequelize.NOW
  //   }
  // },
  // {
  //   timestamps: false
  }
)
