import Grupo from "./grupo.js";
export default class Instituto{

    constructor (codigoInstituto=0,nombre=null){
        this._codigoInstituto = codigoInstituto;
        this._nombre = nombre;
        this._grupos = [];
    }

    codigoInstituto(){
        return this._codigoInstituto;
    }

    cantidadAlumnos(){
        var contador=0;
        for (const grupo of this._grupos){
            contador += grupo.cantidadMiembros();
        }
        return contador;
    }
    addGrupo(grupo){
        this._grupos.push(grupo);
    }
}