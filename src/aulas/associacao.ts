export class Escritor{
  private _ferramenta: Ferramenta | null = null;

  constructor(
    private _nome: string
  ){}

  get nome(): string{
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null){
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null{
    return this._ferramenta;
  }
  escrever():void{
    if(this.ferramenta === null){
      console.log('Não posso escrever sem ferramenta.')
      return
    }
    this.ferramenta.escrever()
  }
}

export abstract class Ferramenta{
  constructor(
    private _nome: string,
  ){}
  abstract escrever(): void;

  get nome(): string{
    return this._nome;
  }
}

export class Caneta extends Ferramenta{
  escrever(): void{
    console.log(`${escritor.nome} está escrevendo...`)
  }
}
export class MaquinaDeEscrever extends Ferramenta{
  escrever(): void{
    console.log(`${escritor.nome} está digitando...`)
  }
}

const escritor = new Escritor('Joao')
const caneta = new Caneta('Bic Preta')
const maquinaEscrever = new MaquinaDeEscrever('Olivetti Lettera 32')
escritor.ferramenta = maquinaEscrever
escritor.escrever()
