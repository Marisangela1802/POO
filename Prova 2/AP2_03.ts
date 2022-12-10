class DespesaMes{
    mes:number
    valor:number
    
    constructor(mes:number, valor:number){
        this.mes = mes
        this.valor = valor
    }

    getMes():number{
        return this.mes
    }

    getValor():number{
        return this.valor
    }
}

class DespesaDia extends DespesaMes{
    dia:number

    constructor(dia:number,mes:number , valor:number){
        super(mes,valor)
        this.dia = dia
    }

    getDia():number{
        return this.dia
    }
}

class DespesaTotal extends DespesaDia{
    cpf:number
    despesas:DespesaDia[]

    constructor(cpf:number,despesas:DespesaDia[],dia:number,mes:number, valor:number){
        super(dia,mes,valor)
        this.cpf = cpf
        this.despesas = despesas
    }

    getCPF(cpf:number){
        return cpf
    }

    totalizaMes(mes:number){
        if(mes === this.mes){
            return this.getValor
        }
    }
}

//let m:DespesaMes = new DespesaMes(3,25)
let d:DespesaDia = new DespesaDia(7,3,76)
let d1:DespesaDia = new DespesaDia(20,5,88)
let dt:DespesaTotal = new DespesaTotal(9999999,[d,d1],7,5,4)
console.log(dt.getCPF(99999))
console.log(dt)