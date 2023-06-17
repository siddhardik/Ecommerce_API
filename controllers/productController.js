
// Importing the Product model
const Product = require('../models/product');


// showProductsList Function to show all products details 
module.exports.showProductsList =  async function(req,res){
    
    try{

        // Fetching all the Products from DB
        let product = await Product.find({});

        // Product beautify , understandable Format
        const jsonProducts = product.map((product,index) => ({
            id: product.id,
            name: product.name,
            quantity: product.quantity
        }));

       
        return res.status(200).json({

            data : {
                Products : jsonProducts,
            },
            message: "These are the  Products Now !"
        });
        
    } catch (err){

        // See The Error Message
        console.log("Error is : ",err);

        //Showing the error message for data fetching
        return res.status(500).json({
            message : "Error in fetching products From DB !"
        });
    }
};


module.exports.create = async function(req,res){
    // console.log(req.body.name, req.body.quantity);
    try{
        
        // Creating a new Product
        let newProduct = await Product.create({
            name:req.body.name,
            quantity:req.body.quantity
        });
        
        //Saving the created newProduct from RAM to the database
        await newProduct.save();

        // For successfully adding a new Product 
        return res.status(200).json({
            data : {
                Product : {
                    name : newProduct.name,
                    quantity : newProduct.quantity
                }
            },
            message : "Product Added Successfully !!"
        });
        
    }catch(err){

         // See The Error Message
         console.log("Error is : ",err);

        //Throws error on failure
        return res.status(500).json({
            message : "Error in adding product to the ECommerce_API DB!"
        });
    }
};

module.exports.delete = async function(req,res){
    // console.log(req.params.id);

    try{

        //Extracting the id from the URL which are passed through params in request 
        const id = req.params.id;

        // Fetching the product by using  id
        let targetProduct  = await Product.findById(id);

        // If targetProduct  is not found
        if(!targetProduct ){

            // Throws Error
            return res.status(404).json({
                message: " OOPS! Product not found!!"
            });
        }
        
        // Deleting the particular product
        let deleteProduct = await Product.deleteOne();

        // on success shows the deleted product
        return res.status(200).json({
            data : {
                product : {
                    id : targetProduct.id,
                    name: targetProduct.name,
                    quantity: targetProduct.quantity
                }
            },
            message : "product deleted"
        });
        
    }catch(err){

       
        // See The Error Message
        console.log("Error is : ",err);

        //Throws error on failure
        return res.status(500).json({
            message : "Error in deleting product"
        });
    }
};

module.exports.updateQuantity = async function(req,res){

    try{
        
        //Extracting the Quantity to update from the URL which are passed through query
        const addingQuantity = req.query.number;

        //Extracting the id from the URL which are passed through params
        const id = req.params.id;
        
        // Fetching the product by id
        let product = await Product.findById(id);
        
        // If product is not found
        if(!product){

            // Throws Error
            return res.status(404).json({
                message: " OOPS! Product not found!!"
            });
        }
        
        // Updating the quantity of the selected product, 10 denotes the decimal number System 
        product.quantity += parseInt(addingQuantity,10);
        
        // storing the updated product in DB
        let updatedProduct = await product.save();
        

        // on success shows the updated product
        return res.status(200).json({
            data : {
                product : {
                    id : updatedProduct.id,
                    name: updatedProduct.name,
                    quantity: updatedProduct.quantity
                }
            },
            message : "updated successfully"
        });
        
    }catch(err){

    
        // See The Error Message
        console.log("Error is : ",err);

        //Throws error on failure
        return res.status(500).json({
            message : "Error in updating quantity"
        });
    }
};

