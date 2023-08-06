const suma = (a, b) => a + b;

const mult = (c, d) => c * d;

const obj = () => {

    return {
        name: '40b',
        modalidad: 'FT',

    }
}

const array = () => {

    const array = ['Daiana', 'Ansony', 'Messi'];

    return array;
}

const promise = () => {

    const newPromise = new Promise((resolve, reject) => {

        resolve('demo test promise');
    })

    return newPromise;
}


const suma2 = (a, b, result) => {

    return (result(a, b))
}

module.exports = {

    suma,
    mult,
    obj,
    array,
    promise,
    suma2
}
