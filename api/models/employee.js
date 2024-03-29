const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
  name: {
    type: 'string',
    required: true
  },
  surname: {
    type: 'string',
    required: true
  },
  birthDate: {
    type: 'date',
    required: true
  },
  DNI: {
    type: 'string',
    required: true
  },
  nationality: {
    type: 'string',
    required: true
  },
  email: {
    type: 'string',
    required: true
  }

})

module.exports = mongoose.model('Employee', employeeSchema)
