export class Ford<T,U>{
  constructor(public nome:T, public ano:U){}
}

const carro1 = new Ford('Focus', 2016);
const carro2 = new Ford(['Focus'], 2016);
const carro3 = new Ford(['Focus'], {ano: 2016});
const carro4 = new Ford<string,number>('Focus',2016);

// de todas estas formas ele conseguiu inferir, porém no caso abaixo não seria possível, e por isso
// vamos utilizar da estrutura de dados pilha.

export class Pilha<T>{
  private contador = 0;
  private elementos: {[elemento:number]:T} = {};

  push(elemento: T):void{
    this.elementos[this.contador] = elemento
    this.contador++
  }
  pop():T | void{
    if(this.isEmpty()) return undefined;
    this.contador--;
    const temp = this.elementos[this.contador]
    delete this.elementos[this.contador]
    return temp;
  }
  isEmpty():boolean{
    return this.contador === 0;
  }
  peek():void{
    console.log(this.elementos[this.contador-1])
  }
}

const pilhuda = new Pilha<number | string>(); // aqui no caso tivemos que inferir com <number | string>
// pois ele nao conseguiria adivinhar o que seria pushado, já que apenas temos o tipo inserido quando
// executamos o metodo.. entao ficaria como any ou unknown se nao inferissemos.
pilhuda.push(1)
pilhuda.pop()
pilhuda.push(2)
pilhuda.peek()
