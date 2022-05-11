const http=require('http')
const path=require('path')//path.join will create less confusion
const fs=require('fs');

const server=http.createServer((req,res)=>{
    // res.writeHead(200,{'Content-Type':'application/JSON'});
    // if(req.url==='/favicon.ico'){
    //     res.end();
    //     return;
    // }
    // else if(req.url==='/'){
    //     fs.readFile(path.join(__dirname,'public','index.html'),'utf-8',(err,data)=>{
    //         if(err){
    //             console.log(err);
    //         }
    //         res.writeHead(200,{'Content-Type':'text/html'});
    //         res.end(data);
    //     })
    // }
    // else if(req.url==='/about'){
    //     fs.readFile(path.join(__dirname,'public','about.html'),'utf-8',(err,data)=>{
    //         if(err){
    //             console.log(err);
    //         }
    //         res.writeHead(200,{'Content-Type':'text/html'});
    //         res.end(data);
    //     })
    // }
    // else if(req.url==='/api/users'){
    //     const users=[
    //         {name:"sam", age:39},
    //         {name:"hamsu", age:32}
    //     ]
    //     res.writeHead(200,{'Content-Type':'application/json'})
    //     res.end(JSON.stringify(users));// this is kinda important
    // }

    //Build Dynamic file path
    let filePath=path.join(
        __dirname,
        'public',
        req.url==='/' ?'index.html': req.url)
        // why this will work because all the req.url that will be set, will be set by us itself
        // so based on the req.url we can create specific file and link it up there
        
    //getting the extension of the file
    let extname=path.extname(filePath);
    
    //Inital content type
    let contentType='text/html';

    //based on extension we will change the content type

    switch(extname){
        case '.js':
            contentType='text/javascript';
            break;
        case '.css':
            contentType='text/css';
            break;
        case '.json':
            contentType='application/json';
            break;
        case '.png':
            contentType='image/png';
            break;
        case '.jpg':
            contentType='image/jpg';
            break;
    }
    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err){
            if(err.code='ENOENT'){
                //Page not found
                fs.readFile(path.join(__dirname,'public','error.html'),'utf-8',(err,data)=>{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.end(data);
                })
            }else{
                //some server error; still we are in error block only
                res.writeHead(500,{'Content-Type':'text/html'});
                res.end(`server Error: ${err.code} `);
            }
        }else{
            //no error
            res.writeHead(200,{'Content-Type':contentType});
            res.end(data);

        }
    })
})

const PORT=process.env.PORT||3000;
server.listen(PORT,()=>(console.log(`Serving from ${PORT} port number` )))