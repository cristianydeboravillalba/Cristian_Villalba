let notas = []
let notaIndividual = 1
while (notaIndividual > 0 && notaIndividual < 11) {
    notaIndividual = parseFloat(prompt("Ingrese la nota sin decimal. Si ya no tiene mas notas, ingrese un numero mayor a 11 o menor a 0"))
    if (notaIndividual > 0 && notaIndividual < 11) {
        notas.push(notaIndividual);
    }


}
let suma = 0
for (let i = 0; i < notas.length; i++) {
    suma += notas[i]
}
let promedio = 0
promedio = suma / notas.length;

if (promedio < 6) {
    document.write(`Su promedio es `, promedio.toFixed(2), ` Usted esta reprobrado`)
} else if (promedio > 6 && promedio < 8) {
    document.write(`Su promedio es `, promedio.toFixed(2), ` Usted esta aprobado`)
} else {
    document.write(`Su promedio es `, promedio.toFixed(2), ` SOBRESALIENTE`)
}
