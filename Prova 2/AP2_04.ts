interface IUsuario{
    id:number
    nome:string
    amizades:IUsuario[]

    isAmigo(usuario:IUsuario):boolean
}

class Amigo implements IUsuario{
    id:number
    nome:string
    amizades:IUsuario[]

    constructor(id:number, nome:string){
        this.id = id
        this.nome = nome
        this.amizades = []
    }

    isAmigo(usuario:IUsuario):boolean{
        for(let amigo of this.amizades){
            if(usuario.id === amigo.id) return true
        }
        return false
    }
}

let am1:Amigo = new Amigo(333,"Maria")
let am2:Amigo = new Amigo(222,"Daniel")
let am3:Amigo = new Amigo(444,'Carlos')
console.log(am1.isAmigo(am3))



