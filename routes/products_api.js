// Importing Express
const express = require('express');

// Creating a router to redirect requests
const router = express.Router();

//Importing the Product controller to redirect to perform the desired function
const productController = require('../controllers/productController');

// Shows All the Products
router.get('/',productController.showProductsList);

// Create  a new Product
router.post('/create',productController.create);

// Delete a Product with the given id
router.delete('/:id',productController.delete);

// Updates a Product with the given id to the given ammount
router.post('/:id/update_quantity',productController.updateQuantity);

// Exporting the router
module.exports = router;