const products=require('../data/products.json');

function findOne(urlId){
    return new Promise((resolve,reject)=>{
        const oneProduct=products.find((product)=>product.id===urlId)
        // the id was defined as a string in the products section.F
        
        // if(oneProduct){
        //     resolve(oneProduct);
        // }else{
        //     reject("error occured");
        // }
        resolve(oneProduct);
    })
}

module.exports={findOne};