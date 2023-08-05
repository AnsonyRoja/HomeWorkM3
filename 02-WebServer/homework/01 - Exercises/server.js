var fs = require("fs");
var http = require("http");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;

const server = http.createServer((req, res) => {

  console.log(`Server raised in port ${PORT}`);


  if (req.url === '/api') {
    // Ruta del archivo dogsData.json dentro de la carpeta "utils"
    const filePath = 'utils/dogsData.json';

    // Utilizamos la función readFile para leer el contenido del archivo
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        // Si hay un error, devolvemos una respuesta con un status 404 y un mensaje de error
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('json not found');
      } else {
        // Si no hay error, devolvemos el contenido del archivo con un status 200 y el Content-Type "application/json"
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });

    // Usamos return para salir del manejador de solicitud después de la respuesta.
    return;
  }

  if (req.url === '/allDogs') {

    const filePath = "utils/allDogs.html";

    fs.readFile(filePath, "utf8", (error, data) => {

      if (error) {

        res.writeHead(404, { "Content-type": "text-plain" });
        res.end("html not found");

      } else {

        res.writeHead(200, { "Content-type": "text/html" });
        res.end(data);

      }

    })

    return;
  }

  // Si el req.url no es "/api", devolvemos una respuesta con un status 404 y un mensaje de error
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Route not found');


}).listen(PORT, "127.0.0.1")

/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
module.exports =
  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
  server;
