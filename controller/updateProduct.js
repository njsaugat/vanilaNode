const { findOne } = require("../model/singleProduct");
const { getDataFromUser } = require("../utils/getDataFromApp");
let products=require('../data/products.json');
const { writeTofile } = require("../utils/writeToFile");
const { createProducts } = require("../model/createProduct");
const { updateProductModel } = require("../model/updateProductModel");

async function updateProduct(req,res,id){

    try{
        //get the product
        const singleProduct=await findOne(id);
        if(!singleProduct){
            res.writeHead(404,{'Content-Type':'application/json'})
            res.write(JSON.stringify({message:'Product not found'}));
            res.end();
        }else{  
            //have the changes
            const {name,description,price}=await getDataFromUser(req)
            const updateFromUser={
                name:name|| singleProduct.name,
                description:description||singleProduct.description,
                price:price|| singleProduct.price
            }
           //update it on the db thru model 
            const updProduct=await updateProductModel(id,updateFromUser)
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(updProduct));
            
        }
    }
    catch(error){
        console.log(error);
    }

}
module.exports={updateProduct}