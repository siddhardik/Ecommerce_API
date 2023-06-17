// Require the mongoose Library
const mongoose = require('mongoose');

// Connecting the database with Database Name ECommerce_API
mongoose.connect("mongodb://127.0.0.1:27017/ECommerce_API");

const db = mongoose.connection;

// on unsuccessfull connection ,  If Any Error occurs during connection
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));


//on succesfull connection
db.once('open',function(){
    console.log(" Hurray ! Connected. Database Name:: ECommerce_API");
});

module.exports = db;