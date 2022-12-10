function fatorial(x:number):number{
    let res = 1
    for(let i=1; i<=x; i++){
        res = res*i
    }

    return res
}

function soma(x:number):number{
    let res = 0
    for(let i=1; i<=x; i++){
        res+= i
    }
    return res
}


const inteiros = (vetor:number[])=>{
    for(let i=0; i<vetor.length; i++){

        if(vetor[i]%2 == 0){
            console.log("O fatorial do número " + vetor[i] + " é " + fatorial(vetor[i]))

        }else{
            console.log("O somatorio do número " + vetor[i] + " é " + soma(vetor[i]))
        }
    }
}

console.log(inteiros([8,9,6,4,5]))