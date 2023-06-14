function mensaje(texto) {
    let invertido = Array.from(texto).reverse().join("");
    return invertido;
}
let texto = prompt("ingresa un texto");
var invertido = mensaje(texto);
console.log(invertido);
document.write(invertido);