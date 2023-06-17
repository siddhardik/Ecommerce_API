// Require the mongoose Library
const mongoose = require('mongoose');

// Connecting the database with Database Name ECommerce_API
mongoose.connect("mongodb+srv://siddharthabhunia2001:6GnVPONcrpYzVK6c@ecommerce-api.5tnwrex.mongodb.net/?retryWrites=true&w=majority");

const db = mongoose.connection;

// on unsuccessfull connection ,  If Any Error occurs during connection
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));


//on succesfull connection
db.once('open',function(){
    console.log(" Hurray ! Connected. Database Name:: ECommerce-API");
});

module.exports = db;