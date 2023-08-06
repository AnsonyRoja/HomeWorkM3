const { suma, mult, array, promise, suma2 } = require('./funciones');

// beforeAll(() => {

//     console.log('Before all');

// })
// afterEach(() => {

//     console.log('After ')

// })


describe('Funciones', () => {


    it('Debe retornar 10 si le pasamos 4 y 6', () => {

        expect(suma(4, 6)).toBe(10);


    });

    it('Debe retornar la multiplicacion de sus parametros', () => {

        expect(mult(4, 5)).toBe(20);
        expect(mult(2, 4)).toBe(8);
    })
})



describe('Array', () => {

    it('debe tener un string con el valor de Messi', () => {

        expect(array()).toContain('Messi');
    })

})

describe('Promesas', () => {

    it('La promesa debe resolverse correctamente', () => {

        return promise().then((value) => {
            return expect(value).toBe('demo test promise')
        })

    })

})

describe('Mock functions', () => {

    it('Debe retornar 10  si es llamada con 4 y 6', () => {


        const result = (a, b) => a + b;
        const prueba = jest.fn(() => result(4, 6))

        suma2(4, 6, prueba);

        expect(prueba.mock.calls.length).toBe(1);
    })
})