
//nos traemos nuestro modulo de http para poder trabajar con nuestro servidor. 
const http = require('http');

http
    .createServer((request, response) => {

        if (request.url === '/users') {

            response.writeHead(200, { "Content-type": "application/json" })

            const users = [
                { id: 1, name: "Lautaro" },
                { id: 2, name: "Martinez" },
                { id: 3, name: "Marcos" },
            ]

            // el metodo JSON. stringify nos permite transformar codigo javascript a formato json
            return response.end(JSON.stringify(users));
        }

        if (request.url === '/posteos') {

            response.writeHead(200, { "Content-type": "text/plain" });
            return response.end("Esta ruta es para los posteos ");
        }
        else {
            response.writeHead(404, { "Content-type": "text/plain" });
            return response.end("Ruta no encontrada");
        }

    })
    .listen(3001, "127.0.0.1"); 