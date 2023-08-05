
const process = require('process');
const { Z_ASCII }  = require('zlib');
const commands = require('./commands/indexx.js');



const bash = () =>{

        process.stdout.write("prompt > ")


}

const print = (output) => {

    process.stdout.write(output)
    process.stdout.write("\nprompt > ")
}

bash();

module.exports={

    print,
    bash,
}