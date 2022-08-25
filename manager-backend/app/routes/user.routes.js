module.exports = (app) => {
  const users = require('../controllers/user.controller')
  const router = require('express').Router()

  /*
  *  ROUTES FOR USERS
  */

  router.get('/', users.fetchAll)

  app.use('/api/users', router)
}