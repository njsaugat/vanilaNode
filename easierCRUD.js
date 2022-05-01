const http=require('http');
const products=require('./data/products.json');// even to get the json we had 2 methods:require & fs.readFile;-->require used when json is static; readFile used when json is dynamic
const server=http.createServer((req,res)=>{
    // a smaller syntax for doing the above stuff
    if(req.url==='/api/products' && req.method==='GET'){
        res.writeHead(200,{"Content-Type":"application/JSON"})
        res.end(JSON.stringify(products))
    }else{
        res.writeHead(404,{"Content-Type":"application/JSON"})
        res.end(JSON.stringify({"error":"not found"}))
    }
    // here since we are directly requiring the json value we have to stringify it or else get erro
})

const PORT=process.env.PORT|| 3000;
server.listen(PORT,()=>console.log(`Serving from ${PORT} port`))