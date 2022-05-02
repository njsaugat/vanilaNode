const products=require('../data/products.json');

function findAll(){
    return new Promise((resolve,reject)=>{
        if(products){
            resolve(products);
        }
        else{
            reject('error has occured');
        }
    })
}

module.exports={findAll}