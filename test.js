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

// fs.writeFile('../data/products.json', JSON.stringify(newProduct),(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// const EventEmitter=require('events');
// const eventEmitter=new EventEmitter();
// eventEmitter.on('start',(...number)=>{//This is REST Operator used to take multiple arguments
//     console.log(typeof number)
//     console.log(number)
//     console.log(`started ${number}`);
// })

// eventEmitter.emit('start', 23,32,233,32,3222,1);

// eventEmitter.on('play',(func)=>{
//     setTimeout(func,5000);
//     func();
// })
// eventEmitter.emit('play',()=>{
//     console.log('I am playing from play ')
// })
// so basically .emit is like addEventListener ie triggering the event
// and .on is like the under the hood implementation of the eventListener
const arr=[1,2,3,4,5,6,7];
const modArr=arr.map(element=>{
    if(element<5){
        return element=10000;
    }
})
console.log(modArr)
// console.log(arr)

