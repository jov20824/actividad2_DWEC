export default class Grupo{

    constructor(codigoGrupo,cantidadMiembros){
        this._codigoGrupo = codigoGrupo;
        this._cantidadMiembros = cantidadMiembros;
    }

    cantidadMiembros(){
        return this._cantidadMiembros;
    }
}