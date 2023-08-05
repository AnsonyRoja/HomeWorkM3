

// const http = require('http');

// http.createServer(
//     (req, res) => {

//         if (req.url === '/') {

//             res.writeHead(200, { "Content-type": "text/plain" })
//                 .end('Hola, me crearon con http ')
//         }
//     }

// ).listen(3001)




const express = require('express');


const morgan = require('morgan');


const usersRoutes = require('./routes/usersRoutes');
const posteosRoutes = require('./routes/posteosRoutes');
const server = express();

// si ami me mandan informacion en formato tipo json y este middleware lo parsea a objeto de javascript
server.use(express.json());

server.use(morgan("dev"));
server.use('/user', usersRoutes);
server.use('/posteo', posteosRoutes);

server.get("/", (req, res) => {

    res.send('Esta ruta fue creada con express');

})

server.get('/users?post', (req, res) => {

    res.send('ruta ab?cd');

})

server.get('/ab*cd', (req, res) => {

    res.send('ruta ab*cd');

})



server.listen(3001, () => {
    console.log('Server listen on port');

})