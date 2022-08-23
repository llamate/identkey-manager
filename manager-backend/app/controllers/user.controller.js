const User = require('../models/user.model')

exports.fetchAll = (request, response) => {
  User.fetchAll(request, (error, data) => {
    if (error) return response.send({ message: error })
    response.send(data)
  })
}