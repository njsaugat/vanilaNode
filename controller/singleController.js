const Product=require('../model/singleProduct.js');
async function getProduct(req,res,id){
    try{
        const singleProduct= await Product.findOne(id);
        if(!singleProduct){
            res.writeHead(404,{"Content-Type":"application/JSON"});
            res.end(JSON.stringify({"message":"product not found"}));
        }else{
            res.writeHead(200,{"Content-Type":"application/JSON"});
            res.end(JSON.stringify(singleProduct));
        }
    }
    catch(error){
        console.log(error);
        res.end();
    }
}

module.exports={getProduct};