//url module as shown in node js course
const url=require('url')
const myUrl= 'https://github.com:443/njsaugat';
// console.log(myUrl.href());
const parseUrl=url.parse(myUrl,true);
console.log(parseUrl)
console.log(parseUrl.host)// gives the port number as well
console.log(parseUrl.hostname)
console.log(parseUrl.search)
// this url module might be an important module while working 
// with http

