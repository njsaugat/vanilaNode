const http=require('http');
const {getProducts}=require('./controller/controller.js');
const server=http.createServer((req,res)=>{
    if(req.url==='/products' && req.method==='GET'){
        getProducts(req,res);
    }else{
        res.writeHead(404,{"Content-Type":"Application/JSON"})
        res.end(JSON.stringify({"message":"error occured in server"}))
    }
})
const PORT=process.env.PORT|| 3000;
server.listen(PORT,()=>console.log(`Serving from ${PORT} port.`));