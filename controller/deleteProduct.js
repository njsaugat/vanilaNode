const { findOne } = require("../model/singleProduct");
const {removeProduct}=require('../model/removeProduct')
async function deleteProduct(req,res,id){
    try{
        const singleProduct=await findOne(id);
        if(!singleProduct){
            res.writeHead(404,{'Content-Type':'application/json'})
            res.write(JSON.stringify({message:'Product not found'}));
            res.end();
        }else{
            await removeProduct(id)
            res.write(JSON.stringify({message:`Product ${id} removed`}));
            res.end();
        }
    }
    catch(error){
        console.log(error)
    }
}
module.exports={
    deleteProduct
}