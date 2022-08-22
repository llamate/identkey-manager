const mysql = require('mysql2')

const config = {
  host:     '127.0.0.1',
  port:     '3306',
  user:     'root',
  password: 'root',
  database: 'ident_keys'
}

const connection = mysql.createConnection({
  host:     config.host,
  port:     config.port,
  user:     config.user,
  password: config.password,
  database: config.database
})

console.log(connection)

module.exports = connection