function potencia(x:number, y:number):number{
    let solucao = 1
    for(let i=0; i<y; i++){
        solucao = solucao*x
    }
    return solucao
}

console.log(potencia(2,8));
