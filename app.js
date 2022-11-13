
const { crearArchivoTabla } = require('./helpers/multiplicar');
const colors = require('colors')
const argv =require('./config/yargs'); 


console.clear();


console.log(argv);




/* console.log(process.argv)
const [ , ,arg3]=process.argv;
const [, base=5]=arg3.split('=')

console.log(base) */


crearArchivoTabla(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));