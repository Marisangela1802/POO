class Endereço {
    rua:string
    cidade:string
    estado:string
    cep:string
    pais:string

    toString(rua:string,cidade:string,estado:string,cep:string,pais:string):string{
        return rua + (",") + cidade + (",") + estado + (",") + cep + (",") + pais
    }

}

interface IPessoa{
    nome:string
    sobrenome: string
    endereço:Endereço

    getNomeCompleto(nome:string,sobrenome:string):string
}

class Estudante implements IPessoa{
    nome:string
    sobrenome: string
    endereço:Endereço

    matricula:string
    media:number

    getNomeCompleto(nome:string, sobrenome:string):string{
        return nome + (" ") + sobrenome   
    }

    getSituação(media:number):boolean{
        if(media>7 || media == 5) return true
        return false
    }

}

class Professor implements IPessoa{
    nome:string
    sobrenome: string
    endereço:Endereço

    salario:number

    getNomeCompleto(nome:string,sobrenome:String):string{
        return nome + (" ") + sobrenome
    }

    getSalario(salario:number):number{
        return salario
    }
}

let endereço1:Endereço = new Endereço()
let es1:Estudante = new Estudante()
let pr1:Professor = new Professor()
console.log(es1.getNomeCompleto("Marcos","Sousa"))
console.log(es1.getSituação(8))
console.log(endereço1.toString("Centro","Altran Moreno","Ceara", "0000000","Brasil"))
console.log(pr1.getSalario(3000))
