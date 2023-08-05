
// const miPromesa = new Promise((resolve, reason) => {
//     resolve('Salio todo 200');
//     reason('Hubo un error');
// });


// miPromesa.then(
//     (value) => console.log(value), // successHandler
//     (reason) => console.log(reason) // errorHandler

// )





const axios = require('axios');

// axios por default hace un get
// axios.get('https://rickandmortyapi.com/api/character/')
//     .then(

//         (response) => response.data.results, // succesHandler
//         (reason) => reason.response.data.error // errorHandler 
//     )
//     // .then(
//     //     (data) => data.results, // successHandler
//     //     (reason) => console.log(reason) //errorHandler

//     // )
//     .then(

//         (results) => console.log(results),
//         (reason) => console.log(reason)

//     )



axios.get('https://rickandmortyapi.com/api/character/')
    .then((response) => response.data.results)
    .then((results) => console.log(results))
    .catch(error => console.log(error))
    .finally(() => console.log('HOla este es el finally'))




