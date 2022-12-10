var dia = 7;
var hora = 12;
var minuto = 30;
if (dia < 2) {
    console.log("NÃO");
}
else if (dia > 7) {
    console.log("NÃO");
}
if (dia >= 2 && dia < 7) {
    if (hora >= 8 && hora <= 12 || hora >= 14 && hora <= 18) {
        if (minuto >= 0 && minuto < 59) {
            console.log("SIM");
        }
    }
}
else if (dia == 7) {
    if (hora >= 8 && hora < 12) {
        if (minuto >= 0 && minuto < 59) {
            console.log("SIM");
        }
    }
}
else {
    console.log("NÃO");
}
