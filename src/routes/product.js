const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");

//create user
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save(user)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get a specific user
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update a user
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, stock, description } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, price, stock, description } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
