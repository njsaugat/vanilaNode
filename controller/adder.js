const addProduct=require('../model/createProduct.js');


async function postProduct(req,res){
    try{
        const newProduct={
            'name': 'Add Title',
            'description':'Add description',
            'price': '$$$'
        }
        const products= await addProduct.createProducts(newProduct);
        res.writeHead(201,{'Content-Type':'application/JSON'})
        res.end(JSON.stringify(products));
    }
    catch(error){
        console.log(error);
    }
}
module.exports={postProduct};