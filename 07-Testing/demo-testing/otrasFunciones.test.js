const { suma, mult, obj } = require('./funciones');



describe('Otros resultados', () => {

    it('Debe retornar 15 si es llamada con 7 y 8', () => {

        expect(suma(7, 8)).toBe(15);

    })

    it('Debe retornar 56 si es llamada con 7 y 8', () => {

        expect(mult(7, 8)).toBe(56);

    })



})


describe('Objetos', () => {

    it('el objeto debe contener la propiedad name', () => {

        expect(obj()).toHaveProperty('name');

    })

    it('EL objeto debe tener 2 propiedades: name y modalidad', () => {

        const obje = { name: '40b', modalidad: 'FT' }
        expect(obj()).toEqual(obje);
    })
    it('Debe contener la propiedad modalidad', () => {


        expect(obj().modalidad).toBeTruthy();
    })

    it('No debe tener la propiedad alumno', () => {

        expect(obj().alumno).toBeFalsy();

    })
})