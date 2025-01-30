export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = []

  inserirProdutos(...produtos: Produto[]) {
    for(const i of produtos){
      this.produtos.push(i)
    }
  }
  quantidadeProdutos():number{
    return this.produtos.length;
  }
  valorTotal():number{
    return this.produtos.reduce((soma,produto) => soma + produto.preco, 0)
  }
}

export class Produto{
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Tacos',29.90)
const produto2 = new Produto('Pingo de Leite',10.99)
const carrinhoMeoo = new CarrinhoDeCompras
carrinhoMeoo.inserirProdutos(produto1,produto2)
console.log(carrinhoMeoo.valorTotal())
