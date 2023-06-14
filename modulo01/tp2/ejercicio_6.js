function encontrarPrimeraVocal(texto){
    const vocales = ["a", "e", "i", "o", "u"];
    texto = texto.toLowerCase();
    for (let i = 0; i <texto.length; i++){
        if (vocales.includes(texto[i]))
        return `La primera vocal es "${texto[i]}" y está en la posición Nº${i + 1}`;

    }
return "No se encontraron vocales en el texto";
}
var texto = prompt("Introduce un texto: ");
const resultado = encontrarPrimeraVocal(texto);
console.log(resultado);