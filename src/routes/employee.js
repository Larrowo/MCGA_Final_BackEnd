const express = require('express')
const router = express.Router()
const employeesController = require('../controllers/employees')
const { tokenAuthenticator } = require('../middleWares/tokenAuthenticator')

// Listens to the GET method
router.get('/employees', employeesController.getEmployees)

// Listens to the GET method with the ´id´ parameter
/**
 * !DEPRECATED ROUTE
 * *router.get('/id/:id', employeesController.getEmployeesById)
 */

// Listens to the POST method
router.post('/employees', tokenAuthenticator, employeesController.addEmployee)

// Listens to the DELETE method
router.delete('/:id', tokenAuthenticator, employeesController.deleteEmployeeById)

// Listens to the PUT method
router.put('/employee/:id', tokenAuthenticator, employeesController.updateEmployeeById)

module.exports = router
