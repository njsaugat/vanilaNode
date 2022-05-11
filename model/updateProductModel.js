const products=require('../data/products.json')
const { writeTofile } = require('../utils/writeToFile')
function updateProductModel(id,updProduct){
    return new Promise((resolve,reject)=>{
        const index=products.findIndex((product)=>(product.id===id))
        products[index]={id,...updProduct}
        writeTofile('./data/products.json',products);
        resolve(products[index])
    })
}

module.exports={
    updateProductModel
}