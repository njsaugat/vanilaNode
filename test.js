// const products=require('./data/products.json');
// const urlId=3;
// // console.log(products);
// const product=products.find((product)=>
//     product.id==='2'
//     // product.price===599.99
//     // console.log(product.name)
// );
// // found out the problem; 
// // id was a string; F
// console.log(product);

// let values=[
//     {a:'v'},
//     {b:'w'},
//     {c:'x'},
//     {d:'y'}
// ]

// const value={e:'z'};
// values=[...values,value];
// console.log(values);

fs.writeFile('../data/products.json', JSON.stringify(newProduct),(err)=>{
    if(err){
        console.log(err);
    }
})