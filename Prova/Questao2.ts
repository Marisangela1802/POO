function numeros(vetor:number[]):[number,number,number]{
    let maior:number = vetor[0]
    let menor:number = vetor[0]
    let media:number = 0
    for (let i=0; i<vetor.length; i++){
        if(vetor[i]>maior) maior = vetor[i]
        if(vetor[i]<menor) menor = vetor[i]
        media +=vetor[i]/vetor.length
    }

    return [maior,menor,media]

}

console.log(numeros([3,4,5,23,35]))