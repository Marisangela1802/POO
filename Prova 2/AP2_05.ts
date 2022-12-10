enum Pagamento {
    DINHEIRO = 'DINHEIRO',
    CHEQUE = 'CHEQUE',
    CARTAO = 'CARTAO'
}


class Produto {
    preço:number
    quantidadeEstoque:number

    constructor(preço:number, quantidadeEstoque:number){
        this.preço = preço
        this.quantidadeEstoque = quantidadeEstoque
    }
}

class Pedido {
    cliente:string
    pagamento:Pagamento
    produto:Produto
    quantidade:number

    constructor(cliente:string, pagamento:Pagamento, produto:Produto, quantidade:number){
        this.cliente = cliente
        this.pagamento = pagamento
        this.produto = produto
        this.quantidade = quantidade
    }
}

class Supermercado extends Produto {
    encomendas:Pedido

    constructor(preço:number,quantidadeEstoque:number,encomendas:Pedido){
        super(preço,quantidadeEstoque)
        this.encomendas = encomendas
    }

    getEncomendas(){
        return this.encomendas
    }


}