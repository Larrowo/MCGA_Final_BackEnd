const express = require('express')
const router = express.Router()
const employeesController = require('../controllers/employees')

// Listens to the GET method
router.get('/employees', employeesController.getEmployees)

// Listens to the GET method with the ´id´ parameter
router.get('/id/:id', employeesController.getEmployeesById)

// Listens to the POST method
router.post('/employees', employeesController.addEmployee)

// Listens to the DELETE method
router.delete('/:id', employeesController.deleteEmployeeById)

// Listens to the PUT method
router.put('/employee/:id', employeesController.updateEmployeeById)

module.exports = router
