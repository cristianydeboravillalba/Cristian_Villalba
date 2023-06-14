function cien_randoms() {
    var numeros = []
    while (numeros.length < 100) {
        var numerorandom = Math.floor(Math.random() * 101);
        if (numeros.indexOf(numerorandom) === -1){
            numeros.push(numerorandom)
        }

    }
    for (let i = 0; i < numeros.length; i++) {
        document.write(numeros[i]+ "<br>");

    }
}
cien_randoms()