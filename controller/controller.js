// const 
// the function has to be async since we dont wanna execute this func immediately; wanna wait till we get request &response

const Product =require('../model/model.js')
async function getProducts(req,res){
    const data=await Product.findAll();
    try{
        res.writeHead(200,{"Content-Type":"Application/JSON"});
        res.write(JSON.stringify(data));
        res.end()
    }
    catch(error){
        // we could have simply printed out the error itself
        // res.writeHead(404,{"Content-Type":"Application/JSON"})
        // res.write(JSON.stringify({"message":"error Occured"}))
        // res.end()
        console.log(error);
    }
}

module.exports={getProducts};