const employeeSchema = require('../models/employees')

// Get employees
const getEmployees = async (req, res) => {    
    try{
        const response = await employeeSchema.find() 
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'List of employees'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

// Get employee by id
const getEmployeesById = async (req, res) => {
     try{
         const response = await employeeSchema.findOne({ id: req.params.id })

         if(!response){
             return res.status(404).json({
                 error: true,
                 msg: 'Employee not found'
             })
         }

         return res.status(200).json({
             data: response,
             error: false,
             msg: `Found employee: ${response.name}`
         })
     }catch(error){
         return res.status(400).json({
             error: true,
             msg: error
         })
     }
 }

// Add a new employee
 const addEmployee =  async (req, res) => {
    try{
         const employee = new employeeSchema(req.body)
         const newEmployee = await employee.save()
         return res.status(201).json({
            data: newEmployee,
            error: false,
            msg: 'Employee added'
         })
    }catch (error){
         return res.status(400).json({
             error: true,
             msg: error
         })
     }
 }

// Delete employee
 const deleteEmployeeById = async (req, res) => {
    try{
        const response = await employeeSchema.deleteOne({ _id: req.params.id })
        if(!response){
            return res.status(404).json({
                error: true,
                msg: 'No se encuentra el producto que desea eliminar'
            })
        }
        return res.status(204).json({
            data: response,
            error: false,
            msg: 'Employeeo eliminado'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

// Update employee
const updateEmployeeById = async (req, res) => {
    try {
     
        const response = await employeeSchema.findByIdAndUpdate(req.params.id, req.body, {new: true, });
        if (!response) {
            return res.status(400).json({
                error: true,
                msg: 'No se pudo actualizar el Employeeo',
            });
        }
        return res.status(200).json({
            data: response,
            error: false,
            message: 'Employeeo actualizado'
        }) 
    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error,
        });
    }
}

module.exports = {getEmployees,addEmployee,getEmployeesById,deleteEmployeeById,updateEmployeeById}