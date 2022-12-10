function lista(lista1:number[]):number[]{
    let lista2 = []
    for(let i = 0; i<lista1.length; i++){
        lista2[i] = lista1[i + 1]
      
    }


    return lista2
}

console.log(lista([1,2,3,6]))
