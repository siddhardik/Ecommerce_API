# Ecommerce_API
This is a major project based on Back-End knowledge , Level 01 Project

Ecommerce API
LEVEL 1
 Go to Terminal
1st => npm install

2nd=>  move ECOMMERCE_API FOLDER  then "npm start "

localhost:3000/ 



-	Design an API for an ecommerce platform admin to manage product inventory
-	Tech Stack: Node.js & Mongo DB
-	[HINT] :: Test your API’s using Postman , I have used here Thunder Client {VS code extension}
-	Beginner Level
-	Models/Schemas:
-	Products [fields: id, name, quantity]
-	API to add products to the database
URL [POST]: localhost:3000/products/create

![image](https://github.com/siddhardik/Ecommerce_API/assets/95465948/7e5f4189-728d-4ab9-a0b9-a738377c91ec)



-	API to list products
URL [GET] : localhost:3000/products


![image-1](https://github.com/siddhardik/Ecommerce_API/assets/95465948/bf29bc29-2d5b-49c1-8b9d-6707bdfd8fcd)







-	API to delete products
URL [DELETE] : localhost:3000/products/:id


![image-2](https://github.com/siddhardik/Ecommerce_API/assets/95465948/733cc5a5-a34b-4eb5-9e65-c94cabda7385)



-	API to update quantity of a product (can be incremented or decremented)
URL [POST] : localhost:3000/products/:id/update_quantity/?number=10

![image-3](https://github.com/siddhardik/Ecommerce_API/assets/95465948/38926001-8416-46c4-b0d3-9615c6d465ac)




