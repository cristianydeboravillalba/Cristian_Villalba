let dia, mes, año;
mes = prompt("Ingrese el número del mes:", "...");
mes = parseInt(mes);
if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    document.write("este mes tiene 31 dias.");
}
else {
    if (mes == 2)
        document.write("este mes puede tener 28 dias.");
    else if (mes == 4 || mes == 6  || mes == 9 || mes == 11)
        document.write("este mes tiene 30 dias.");
        else 
          alert("Error este numero no pertenece a ningun calendario pavo")
    }