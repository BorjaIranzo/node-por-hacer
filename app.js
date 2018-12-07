//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');

//console.log(argv);

let comando = argv._[0];

const porHacer = require('./por-hacer/por-hacer');

switch (comando) {
    case 'crear':
        let tareaPorHacer = porHacer.crear(argv.descripcion);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('======Por hacer========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}