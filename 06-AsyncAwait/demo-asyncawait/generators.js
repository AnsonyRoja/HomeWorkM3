
// function* generatorShowInstructors() {

//     console.log('Iniciando');
//     yield 'Ansony';
//     yield 'Jorg';

//     return 'terminando';
// }

// const generatorObject = generatorShowInstructors();

// console.log(generatorObject);

// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next())


// function* naturalNumbers() {

//     let number = 1;

//     while (true) {

//         yield number;
//         number = number + 1;

//     }

// }

// const generatorObject = naturalNumbers();

// console.log(generatorObject.next());
// console.log(generatorObject.next());



// Async Await

const axios = require("axios");


// async function getUsers() {

//     const { data } = await axios('https://jsonplaceholder.typicode.com/users');



// }


const getUsers = async () => {

    try {


        const { data } = await axios('https://jsonplaceholder.typicode.com/userss');

        if (!data) throw new Error('Hubo un pequeño inconveniente master');

        const users = data.map(user => {

            return {
                id: user.id,
                name: user.name,
            }

        })

        return users;

    } catch (error) {

        console.log(error.message);

    }
}

getUsers().then(response => console.log(response));

// getUsers().then(response => console.log(response));


// server.get('/', async (req, res) => {


//     await getUsers(req, res)

// })

router.get('/', async (req, res) => {


    try {


        const users = await getUsers();
        return res.status(200).json(users);

    } catch (error) {

        return res.status(404).send("not found");

    }


})