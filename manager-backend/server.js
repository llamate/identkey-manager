const express = require('express')
const app = express()

/*
 *  ROUTES
 */

require('./app/routes/user.routes')(app)

app.listen(8080, () => {
  console.log("Localhost started listening to port 8080")
})