

const fulfilled1 = new Promise((resolve, reject) => {

    resolve('Resuelto')
})

const fulfilled2 = new Promise((resolve, reject) => {

    resolve("Resuelto 2");

})

const rejected1 = new Promise((resolve, reject) => {

    reject('Sin resultados')

})


// Case 1

fulfilled1.then((value) => console.log('caso 1: ', value));

// Case 2

rejected1.then(

    (value) => console.log(value),
    (reason) => console.log('case 2: ', reason)

)

// case 3

// la promesa se resuelve y no tengo un successHandler

fulfilled1
    .then()
    .then((value) => console.log('Case 3: ', value))

// case 4
// La promesa se rechaza y no tengo un errorHandler

rejected1
    .then((value) => console.log(value))
    .then((value) => console.log(value))
    .then((value) => console.log(value))
    .then((value) => console.log(value))
    .catch((error) => console.log('caso 4: ', error))

// case 5

fulfilled1
    .then(
        // cuando yo tengo un return es pasarle una nueva promesa al siguiente then
        // (value) => { return 'Te paso info' },
        (value) => console.log('Te paso info'),
        (error) => console.log(error)
    )
    .then((value) => console.log('Este es el segundo then: ', value))



// case 6

rejected1
    .then(
        (value) => { return "otro value" },
        // no usar return en errores ya que la siguiente promesa lo podria tomar como un successhandler y estaria mal implementado
        (error) => { throw error }
    )
    .then(

        (value) => console.log("caso 6: ", value),
        (error) => console.log("errorHandler", error)
    )

// case 7 

fulfilled1
    .then(

        // (value) => { return fulfilled2 },
        (value) => { return rejected1 },
        (error) => { throw error }
    )
    .then(

        (value) => console.log('successHandler: ', value),
        (error) => { throw error }
    )

    .catch(error => console.log('catch: ', error));