var num1 = 1;
var num2 = 1;
var num3 = 1;
var tem = 58;
var contador = 0;
for (var i = 1; i < tem; i++) {
    num1 = num2 + num3;
    num2 = num3;
    num3 = num1;
    if (tem == num1) {
        console.log("Tem na lista");
        contador = 0;
        break;
    }
    else if (tem != num1) {
        contador++;
    }
}
if (contador != 0) {
    console.log("Não tem na lista");
}
