// const products=require('../data/products.json')
const createProduct=require('../model/createProduct.js');

async function createDyanmicProduct(req,res){
    try{
        let body='';// should be let; as assign to constant variable mildaina
        req.on('data',(chunk)=>{// gets the data until it's coming
            body+=chunk.toString();// chunk is a buffer; so it has to be converted to string
            console.log(body)
        })
        req.on('end',async ()=>{//(after data ceases/ends to come, this callback is run) // since we are using await the func also should be async
            // const bodyValue=parse(body);
            // const {name,description,price}=JSON.parse(body);
            // const product={
            //     name,
            //     description,
            //     price
            // }
            // const createdProduct=await createProduct.createProducts(product);
            const createdProduct=await createProduct.createProducts(JSON.parse(body));
            res.writeHead(200,{'Content-Type':'application/json'})
            res.write(JSON.stringify(createdProduct));
            res.end();
        })
    }
    catch(error){
        console.log(error);
    }
}
module.exports={createDyanmicProduct}

