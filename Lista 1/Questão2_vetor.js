function numeros(vetor) {
    var maior = vetor[0];
    var menor = vetor[0];
    for (var i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior)
            maior = vetor[i];
        if (vetor[i] < menor)
            menor = vetor[i];
    }
    return [maior, menor];
}
console.log(numeros([3, 4, 5, 23, 67, -9, -2, 35]));
/*
let maior:number = 0
let menor:number = 0

let maior_menor:[number,number][]

function int(int:number[]=[]):number|string{
    for(let i=0; i<int.length-1; i++){
       // for(let j=0; j<int.length; i++){
            if(int[i] == int[i+1]){
                return "numeros repetidos, troque um dos números"
            }else
            /*
            para i == 0
            maior = int[i]
            menor = int[i]
            
            para i > 1 até i < int.lenght - 1
            se int[i] > maior
            maior = int[i]
            ou se int[i] < menor
            menor = int[i]
            
                if(int[i]>int[i+1]){ //int[i] > maior -> i > 1
                    maior = int[i]
                    menor = int[i+1]
                    maior_menor = [
                        [maior,menor]
                    ]
                }else if(int[i]<int[i]){
                    maior = int[i+1]
                    menor = int[i]
                    maior_menor = [
                        [maior,menor]
                    ]
            }
            int[i] = int[i+1]
        }
    //}
    return
}

let Vetor = int([2,4,3,5])
console.log(Vetor)
*/ 
