function decorador(classPrototype: any, nome: string | symbol):any{
    let valorPropriedade: any;
    return {
      get: () => valorPropriedade,
      set: (valor:any) => {valorPropriedade = valor + valor}
    }
}

export class UmCarro{

  nome: string;
  ano: number;
  @decorador
  motor: string;

  constructor(nome: string, ano:number, motor:string){
    this.nome = nome;
    this.ano = ano;
    this.motor = motor;
  }

  acelerar(msg:string):string{
    return `${this.motor} está usando sua capacidade para acelerar. ${msg}`
  }
  get statusDoCarro():string{
    return this.nome + ' ' + this.ano;
  }
  set statusDoCarro(valor:string){
    const palavras = valor.split(/\s+/g);
    const nomeDoCarro = palavras.shift();
    if(!nomeDoCarro) return;
    this.nome = nomeDoCarro;
    this.motor = palavras.join(' ')
  }
}

const audiA3 = new UmCarro('A3',2014,'EA888')
const metodo = audiA3.acelerar('')
console.log(metodo)
