const connection = require('../config/database.config')

const User = (user) => {
  this.rfid = user.rfid,
  this.keynumber = user.keynumber,
  this.employee = user.employee,
  this.lastupdate = user.lastupdate
}

/*
 *  CRUD
 */

User.fetchAll = (request, result) => {
  const query = "SELECT * FROM users"

  connection.query(query, (error, response) => {
    if (error) return result(null, error)
    result(null, response)
  })
}

module.exports = User