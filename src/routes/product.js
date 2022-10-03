const express = require("express");
const router = express.Router();
const productSchema = require("../models/Product");

//create product
router.post("/products", (req, res) => {
  const product = productSchema(req.body);
  product
    .save(product)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all products
router.get("/products", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get a specific product
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update a product
router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, stock, description } = req.body;
  productSchema
    .updateOne({ _id: id }, { $set: { name, price, stock, description } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a product
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
