function lista(lista1) {
    var lista2 = [];
    for (var i = 0; i < lista1.length; i++) {
        lista2[i] = lista1[i + 1];
    }
    return lista2;
}
console.log(lista([1, 2, 3, 6]));
