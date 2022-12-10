function potencia(x, y) {
    var solucao = 1;
    for (var i = 0; i < y; i++) {
        solucao = solucao * x;
    }
    return solucao;
}
console.log(potencia(2, 8));
