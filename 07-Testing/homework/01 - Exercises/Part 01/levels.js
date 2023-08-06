const levelOne = (a, b) => {
    return a + b
};

const levelTwo = (letras) => {


    if (letras.length < 2) {
        return letras;
    }

    if (letras.length === 2) {

        return letras[0];
    }

    if (letras.length > 2) {
        if (letras.length % 2 === 0) {
            const firstChar = letras.charAt(0);

            const lastChar = letras.charAt(letras.length - 1);
            return firstChar + lastChar;
        } else if (letras.length === 5) {

            const firstChar = letras.charAt(0);

            const lastChar = letras.charAt(letras.length - 1);

            const middleChar = letras.charAt(Math.floor(letras.length / 2)); // Obtener el carácter del medio

            return firstChar + middleChar + lastChar;

        } else {
            const firstChar = letras.slice(0, 3);
            const middleChar = letras.slice(4, 5);
            const lastChar = letras.charAt(letras.length - 1);
            return firstChar + middleChar + lastChar;

        }
    }


};

const levelThree = (a, b) => {

    const combinedArray = a.concat(b);

    // Ordenar el nuevo arreglo utilizando el método sort()
    const sortedArray = combinedArray.sort((a, b) => a - b);

    // Devolver el arreglo resultante
    return sortedArray;

};



const levelFour = (num) => {

    const numStr = String(num);

    let sum = 0;
    let reversedNum = 0;

    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]);
        sum += digit;


    }

    let striNum = sum.toString().split('');
    reversedNum = striNum.reverse().join("");



    return sum * reversedNum === num;


};



module.exports = { levelOne, levelTwo, levelThree, levelFour };
