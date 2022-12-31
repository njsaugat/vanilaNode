function getDataFromUser(req) {
  // so like this needs a request only
  return new Promise((resolve, reject) => {
    try {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString(); //converts to string
      });
      req.on('end', () => {
        resolve(JSON.parse(body)); // so like we are resolving the body's data directly
      });
    } catch (error) {
      reject(error);
    }
  });
}
module.exports = { getDataFromUser };
