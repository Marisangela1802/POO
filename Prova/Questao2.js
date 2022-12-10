function numeros(vetor) {
    var maior = vetor[0];
    var menor = vetor[0];
    var media = 0;
    for (var i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior)
            maior = vetor[i];
        if (vetor[i] < menor)
            menor = vetor[i];
        media += vetor[i] / vetor.length;
    }
    return [maior, menor, media];
}
console.log(numeros([3, 4, 5, 23, 35]));
