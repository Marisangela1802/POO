var lista = [2, 3, 5, 4, 6, 7, 10];
var soma_total = 0;
for (var i = 0; i < lista.length; i++) {
    soma_total += lista[i];
}
var media = soma_total / lista.length;
console.log(media);
for (var i2 = 0; i2 < lista.length; i2++) {
    if (lista[i2] >= media) {
        console.log("Os numeros ");
        console.log(lista[i2]);
        console.log("são maiores que a média");
    }
}
