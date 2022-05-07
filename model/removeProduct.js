let products=require('../data/products.json')
const { writeTofile } = require('../utils/writeToFile')
function removeProduct(id){
    return new Promise((resolve,reject)=>{
        products= products.filter((product)=>(product.id!==id));
        writeTofile('./data/products.json',products);
        resolve()
    })
}

module.exports={
    removeProduct
}