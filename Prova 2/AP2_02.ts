//Polimmorfismo é quando existe uma superclasse e outras classes herdam os metodos dessa superclasse.
// Ex.: existe uma super classe com os atributos nome, sobrenome, e profissão; e um metodo chamado getNome.
//Existe outra classe chamada Estudante, essa classe vai herdar os atributos e os metodos da super classe.
// Com o polimorfismo é possivel reutilizar atributos de outras classes com uma logica diferente, diminuindo assim, o numero de codigo

abstract class Pessoa {
    nome:string
    idade:number

    abstract Nome(nome): string
}

class Estudante extends Pessoa {
    ira:number

    Nome(nome:string):string {
        return nome
    }
}

interface IFaculdade extends Pessoa{
    Semestre:string

    getSemestre(Semestre:string):string
}
interface  ISofredor extends IFaculdade{
    Dificuldade_ap1:string

    getAvaliação(Dificuldade_ap1:string):string
}

class DD implements ISofredor{
    Dificuldade_ap1:string
    Semestre:string
    nome:string
    idade:number

    Nome(nome:string):string {
        return nome
    }

    getSemestre(Semestre:string):string{
        return Semestre
    }

    getAvaliação(Dificuldade_ap1:string):string {
        return "A dificuldade está: " + Dificuldade_ap1
    }
    
}

let curso:DD = new DD()
console.log(curso.getAvaliação("Extrema"))
