
const express = require("express");
const routerUsers = express.Router();


// en esta modulacion de rutas podria crear el crud de usuarios sin ningun problema

routerUsers.get('/:id/:name', (req, res) => {

    const { id, name } = req.params;

    if (+id === 20 && name === 'Ansony') {
        const infoUser = {

            cohorte: '40 B',
            name: "Ansony",
            id: 20,
            alumnos: '39',
        }

        return res.json(infoUser);
    }


    res.status(404).send('Hubo un error');

    // funciona igual que el json
    // res.send(infoUser);



})



routerUsers.get('/', (req, res) => {

    console.log(req.query);
    const { name } = req.query;
    if (name) {

        //aca mandariamos info especificada de ese usuario 
        return res.send(`me mandaron este name ${name}`);

    }

    return res.send("mando a todos los usuarios");

})


module.exports = routerUsers;