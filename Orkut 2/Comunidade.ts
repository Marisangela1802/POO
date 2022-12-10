import {Categoria} from './Categoria'
import {Forum} from './forum'

class Comunidade{
    id:number
    nome:string
    imagem:string

    categoria:Categoria
    forum:Forum

    constructor(id:number, nome:string, imagem:string){
        this.id = id
        this.nome = nome
        this.imagem = imagem
    }
}

export {Comunidade}