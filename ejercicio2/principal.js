import Instituto from './instituto.js';
import Grupo from './grupo.js';


const grupo1 = new Grupo(1234,32);
const grupo2 = new Grupo(5678,32);
const insti = new Instituto(2468,"IES Fleming");

insti.addGrupo(grupo1);
insti.addGrupo(grupo2);
console.log(insti.codigoInstituto());
var numeroTotal = insti.cantidadAlumnos();
console.log(numeroTotal);