const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: 'string',
    required: true
  },
  role: {
    type: 'string',
    required: true
  },
  email: {
    type: 'string',
    required: true
  },
  password: {
    type: 'string',
    required: true
  },
  token: {
    type: 'string'
  }

})

module.exports = mongoose.model('user', userSchema)
