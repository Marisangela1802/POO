const cunhado = (x:number):boolean => {
    for(let i=2; i<x/2; i++){
        if(x%5!=0) return false
        if(x%i==0) return false
    }
    return true
}

console.log(cunhado(5))
console.log(cunhado(11))