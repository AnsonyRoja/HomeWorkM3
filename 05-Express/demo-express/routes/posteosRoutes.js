
const express = require("express");
const routerPosteos = express.Router();


//Este array simularia una base de datos.
const users = [];

let id = 0;
routerPosteos.post('/', (req, res) => {
    //el body es para el metodo post y metodo put
    console.log(req.body);
    const { name, alumnos } = req.body;
    const newUser = {
        id: ++id,
        name,
        alumnos
    }

    users.push(newUser);

    return res.json(users);
})



module.exports = routerPosteos;