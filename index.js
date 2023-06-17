// Import Library
const express=require("express");
//Return A Class , Now We need to create A Object 
const app=express();   // express()   or new express() 
//app is a instamce of expressClass

// require the db
const db = require('./config/mongoose');

const port =  3000;

// parses incoming requests with URL-encoded payloads and is based on a body parser.
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/',require('./routes/index'));

app.listen(port,(err)=>{
    
    if(err){
        console.log("Error in running the server");
        return;
    }
    console.log(` Wow ! Server is  up and running on port:  ${port}`);
});

