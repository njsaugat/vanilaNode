const fs=require('fs');
function writeTofile(path,newProduct){
    fs.writeFile(path, JSON.stringify(newProduct),(err)=>{
        if(err){
            console.log(err);
        }
    })
}
module.exports={writeTofile};