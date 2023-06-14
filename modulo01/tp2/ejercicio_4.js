function paridad(num) {
    if (num % 2 === 0) {
        return "Es Par";
    } else {
        return "Es Impar";
    }
}
const num = 5;
const resultado = paridad(num);
console.log(`El numero ${num} es ${resultado}`);