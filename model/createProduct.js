let products=require('../data/products.json');// declared let so that we could change later
const { writeTofile } = require('../utils/writeToFile');
const {v4:uuidv4}=require('uuid');

function createProducts(newProduct){
    return new Promise((resolve,reject)=>{
        // const id= '-1';
        const id= uuidv4();//generating using uuidv4;
        const newProductWithId={id,...newProduct}
        
        // products=[...products,newProduct];// since post we have to only like have the latest/last added value;we need not add that in the products but permanently add it in the file itself 
        // now like everytime I post there, I have to add to file also
        // products=[...products,newProductWithId];
        products.push(newProductWithId);
        writeTofile('./data/products.json',products);
        resolve(newProductWithId);
    })
}
module.exports={createProducts};