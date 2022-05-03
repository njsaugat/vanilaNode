const http=require('http');
const {getProducts}=require('./controller/controller.js');
const {getProduct}=require('./controller/singleController.js')
const {postProduct}=require('./controller/adder.js')
const server=http.createServer((req,res)=>{
    // let id= Math.floor(Math.random() * 5)+1
    // console.log(id);
    // const urlId=toString(id);
    const urlId='3';
    if(req.url==='/products' && req.method==='GET'){
        getProducts(req,res);
    }
    // else if((req.url===`/product/${'1'}` || req.url===`/product/${'2'}` ||req.url===`/product/${'3'}` ||req.url===`/product/${'4'}` ||req.url===`/product/${'5'}` )&& req.method==='GET'){
    else if(req.url.match(/\/product\/([0-9]+)/) &&req.method==='GET'){
        const id=req.url.split('/')[2];
        getProduct(req,res,id)
    }
    else if(req.url==='/products' && req.method==='POST'){
        postProduct(req,res);
    }
    else{
        res.writeHead(404,{"Content-Type":"Application/JSON"})
        res.end(JSON.stringify({"message":"error occured in server"}))
    }
})
const PORT=process.env.PORT|| 3000;
server.listen(PORT,()=>console.log(`Serving from ${PORT} port.`));