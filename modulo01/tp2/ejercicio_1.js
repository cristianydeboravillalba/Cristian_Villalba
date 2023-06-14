var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// 1. Determinar cuál de los "elementos de texto" es mayor en longitud
var elementosTexto = valores.filter(function (elemento) {
    return typeof elemento === "string";
});

var elementoMayor = "";
var longitudMayor = 0;
elementosTexto.forEach(function (elemento) {
    if (elemento.length > longitudMayor) {
        elementoMayor = elemento;
        longitudMayor = elemento.length;
    }
});

console.log("El elemento de texto mayor es:", elementoMayor);

