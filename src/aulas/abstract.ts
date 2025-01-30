export abstract class Personagem{
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ){}

  atacar(personagem: Personagem): void{
    console.log(`${this.nome} está atacando ${personagem.nome}.`)
    this.bordao()
    personagem.perderVida(this.ataque);
    console.log(`${personagem.nome} está com ${personagem.vida} de vida restantes.`)
  }
  perderVida(ataque: number): number{
    return this.vida = this.vida - ataque
  }
  abstract bordao():void; // é necessário que haja uma chamada do método na classe abstrata
  // porém o mesmo não pode ter 'corpo', isso cabe às classes que extendem a classe abstrata personagem
  // para decidir.
}


class Mago extends Personagem {
  bordao():void{
    console.log('Soul Repentance. 🪄')
  }
}
class Elfa extends Personagem {
  bordao():void{
    console.log('Não perderei dessa vez...')
  }
}

const Joao = new Mago('Joao',130,99);
const Maria = new Elfa('Maria',1000,25);
Joao.atacar(Maria);
