
const fs = require('fs');
const http = require('http');


const PORT = 3001;


const server = http.createServer((request, response) => {


    console.log(`Server raised in port ${PORT}`)


    if (request.url === '/api') {

        const filePath = 'utils/dogsData.json';

        fs.readFile(filePath, (error, data) => {


            if (error) {

                response.writeHead(404, { "Content-type": "text/plain" });
                response.end('json not found');
            } else {

                response.writeHead(200, { "Content-type": "application/json" });
                response.end(data);
            }


        })

        return;
    }

    response.writeHead(404, { "Content-type": "text/plain" });
    response.end("Not Found");

}).listen(PORT, "127.0.0.1");



module.exports = server;
