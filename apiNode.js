const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{

    res.statusCode=200;
    res.setHeader("Content-Type","application/JSON");
    
    
    
    // we get the data from fs; so after we get the data we have to write 
    fs.readFile('./data/products.json','utf8',(err,data)=>{
        if(err){
            console.log( err);
            res.write(err);// if I have some aru path then the error haru throw hunxa; + esma we 
            // res.write(JSON.stringify(err)) shouldn't stringigy the error as the error has to crash the stuff 
        }else{
            // res.write(JSON.stringify(data));//idk why but json wala stuff brought not so 
            res.write(data);//ig getting through the fs module, this data was brought as it is
        }
        res.end();
    })
})

const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>console.log(`Serving from ${PORT} port`))