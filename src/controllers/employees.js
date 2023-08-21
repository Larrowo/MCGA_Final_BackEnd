const employeeSchema = require('../models/employee')

// Get employees
const getEmployees = async (req, res) => {
  try {
    const response = await employeeSchema.find()
    return res.status(200).json({
      data: response,
      error: false,
      msg: 'List of employees'
    })
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error
    })
  }
}

/**
 * !THIS FUNCTION IS DEPRECATED
 */
// Get employee by id
const getEmployeesById = async (req, res) => {
  try {
    const response = await employeeSchema.findOne({ id: req.params.id })

    if (!response) {
      return res.status(404).json({
        error: true,
        msg: 'Employee not found'
      })
    }

    return res.status(200).json({
      data: response,
      error: false,
      msg: `Found employee: ${response.surname}, ${response.name}`
    })
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error
    })
  }
}

// Add a new employee
const addEmployee = async (req, res) => {
  try {
    // eslint-disable-next-line new-cap
    const employee = new employeeSchema(req.body)
    const newEmployee = await employee.save()
    return res.status(201).json({
      data: newEmployee,
      error: false,
      msg: 'Employee added'
    })
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error
    })
  }
}

// Delete employee
const deleteEmployeeById = async (req, res) => {
  try {
    const response = await employeeSchema.deleteOne({ _id: req.params.id })
    if (!response) {
      return res.status(404).json({
        error: true,
        msg: 'The employee cannot be found'
      })
    }
    return res.status(204).json({
      data: response,
      error: false,
      msg: 'Employee deleted'
    })
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error
    })
  }
}

// Update employee
const updateEmployeeById = async (req, res) => {
  try {
    const response = await employeeSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!response) {
      return res.status(400).json({
        error: true,
        msg: "Couldn't update employee"
      })
    }
    return res.status(200).json({
      data: response,
      error: false,
      message: 'Employee updated'
    })
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error
    })
  }
}

module.exports = { getEmployees, addEmployee, getEmployeesById, deleteEmployeeById, updateEmployeeById }
