const express = require("express");
const router = express.Router();
const employeeSchema = require("../models/employee");

//create employee
router.post("/employees", (req, res) => {
  const employee = employeeSchema(req.body);
  employee
    .save(employee)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all employees
router.get("/employees", (req, res) => {
  employeeSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get a specific employee
router.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  employeeSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update a employee
router.put("/employees/:id", (req, res) => {
  const { id } = req.params;
  const { name, surname, age, birthDate, email, password, DNI, nationality } =
    req.body;
  employeeSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          name,
          surname,
          birthDate,
          age,
          email,
          password,
          DNI,
          nationality,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a employee
router.delete("/employees/:id", (req, res) => {
  const { id } = req.params;
  employeeSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
