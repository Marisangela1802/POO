const fatorial = (x:number):number =>{
    let res = 1
    for(let i=1; i<=x; i++){
        res = res*i
    }

    return res
}

console.log(fatorial(5));