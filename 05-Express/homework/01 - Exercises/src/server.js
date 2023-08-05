const express = require("express");


let publications = [];

const server = express();

server.use(express.json());



const id = publications.length + 1;

server.post('/posts', (req, res) => {


    const { author, title, contents } = req.body;
    if (!author || !title || !contents) {
        return res.status(400).json({ error: "No se recibieron los parámetros necesarios para crear la publicación" });
    }

    const newPublication = { id, author, title, contents };


    publications.push(newPublication);

    res.status(201).json(newPublication);



})







server.get('/posts', (req, res) => {

    const { author, title } = req.query;


    const matchedPublications = publications.filter(pub => pub.author === author && pub.title === title);


    if (matchedPublications.length === 0) {
        return res.status(404).json({ error: "No existe ninguna publicación con dicho título y autor indicado" });
    }


    res.json(matchedPublications);

});


server.get('/posts/:author', (req, res) => {

    const author = req.params.author;

    const authorPublications = publications.filter(pub => pub.author === author);

    if (authorPublications.length === 0) {
        return res.status(404).json({ error: "No existe ninguna publicación del autor indicado" });
    }

    res.json(authorPublications);

});


server.put('/posts/:id', (req, res) => {
    // Obtener el parámetro de ruta (id) del request
    const id = parseInt(req.params.id);

    // Obtener los campos title y contents del body del request
    const { title, contents } = req.body;

    // Verificar si se recibieron los campos title y contents
    if (!title || !contents) {
        return res.status(400).json({ error: "No se recibieron los parámetros necesarios para modificar la publicación" });
    }

    // Buscar la publicación por el id en el array de publicaciones
    const publicationToUpdate = publications.find(pub => pub.id === id);

    // Verificar si se encontró una publicación con el id indicado
    if (!publicationToUpdate) {
        return res.status(404).json({ error: "No se recibió el id correcto necesario para modificar la publicación" });
    }

    // Actualizar los datos de la publicación con los nuevos valores
    publicationToUpdate.title = title;
    publicationToUpdate.contents = contents;

    // Devolver el objeto de la publicación recientemente actualizada
    res.json(publicationToUpdate);
});




server.delete('/posts/:id', (req, res) => {
    // Obtener el parámetro de ruta (id) del request
    const id = parseInt(req.params.id);

    // Verificar si se recibió el id en los params
    if (isNaN(id)) {
        return res.status(400).json({ error: "No se recibió el id de la publicación a eliminar" });
    }

    // Buscar la publicación por el id en el array de publicaciones
    const indexToDelete = publications.findIndex(pub => pub.id === id);

    // Verificar si se encontró una publicación con el id indicado
    if (indexToDelete === -1) {
        return res.status(404).json({ error: "No se recibió el id correcto necesario para eliminar la publicación" });
    }

    // Eliminar la publicación del array de publicaciones
    publications.splice(indexToDelete, 1);

    // Devolver un JSON con el mensaje de éxito
    res.json({ success: true });
});


//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
