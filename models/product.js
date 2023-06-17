// Importing Mongoose
const mongoose = require('mongoose');


// Creating a Schema for the product
const productSchema = new mongoose.Schema({
        // id:{
        //     type : Number,
        //     required: true
        // },  => id refers mongo db every document's object id
        name : {
            type : String,
            required: true
        },
        quantity: {
            type : Number,
            required: true
        }
});

//Model with "productSchema" schema and "Product" Collection 
const Product = mongoose.model("Product",productSchema);
// one collection "products" [Auto convert plural and small letter] will be created on mongodb  under Database 

// Exporting the Model
module.exports = Product;