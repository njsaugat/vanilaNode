const { createProducts } = require('../model/createProduct');
const getDataFromApp=require('../utils/getDataFromApp')
async function createFinalProduct(req,res){
    try{
        const product=await getDataFromApp.getDataFromUser(req);
        const createdProductFinal=await createProducts(product);
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(createdProductFinal))
    }
    catch(error){
        console.log(error)
    }
}
module.exports={createFinalProduct}