function info(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return "esta formada solo por mayusculas ";
    } else if (cadena === cadena.toLowerCase()) {
        return "esta formada por minusculas ";
    } else {
        return "esta formada por mayusculas y minusculas";
    }

}
const texto = "hola mundo";
const resultado = info(texto);
console.log(resultado);
