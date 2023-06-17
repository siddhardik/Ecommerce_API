//import express 
const express = require('express');

// Creating a router instance  to redirect requests
const router = express.Router();
const homeController = require('../controllers/homeController');

//Redirecting to API
router.use('/products',require('./products_api'));
router.get('/',homeController.home);

// Exporting the router
module.exports = router;