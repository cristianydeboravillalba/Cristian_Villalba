function factorial(valor){
    var respuesta = 1;
 
    for(let i= 1; i<= valor; i++){
        respuesta *= i;
    }
    return respuesta;
}
 
console.log(factorial(5));