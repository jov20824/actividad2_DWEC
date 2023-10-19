function separaNumeros(lista){
    var listaNumeros=new Array();
    for(var i=0;i<lista.length;i++){
        if(typeof(lista[i])===typeof(1)){
            listaNumeros.push(lista[i]);
        }
    }
    return listaNumeros;
}
var array = [5,10,"Hola","10",3,4];
var resultado = separaNumeros(array);
console.log(resultado);
