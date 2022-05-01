const http = require('http');
// const fs=require('fs');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/HTML');
    res.write('<h1>Hello there,</br> the angel from my nightmare</h1>')
    res.end();//missing this I wasn't getting any response from postman; so this  is kinda super important!!
    
})

const PORT = process.env.PORT || 3000;//means whatever is there is in the evironment variable port that is available or 3000
server.listen(PORT, () => console.log(`Server is listening on port no. ${PORT}`))// this is async as it is taking a callback func; if createServer ma nothing is written then server will be hang;even if there's only console.log() the server will be hang;console ko kura chai print hunca pheri

