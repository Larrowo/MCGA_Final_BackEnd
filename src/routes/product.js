const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employees")

// Listens to the GET method
router.get("/", employeesController.getEmployees)

// Listens to the GET method with the ´id´ parameter
router.get("/id/:id", employeesController.getEmployeesById)

// Listens to the POST method
router.get("/", employeesController.addEmployee)

// Listens to the DELETE method
router.get("/:id", employeesController.deleteEmployeeById)

// Listens to the PUT method
router.get("/:id", employeesController.updateEmployeeById)

module.exports = router;