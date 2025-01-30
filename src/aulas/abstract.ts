export class Personagem{
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ){}

  atacar(personagem: Personagem): void{
    console.log(`${this.nome} está atacando ${personagem.nome}.`)
    personagem.perderVida(this.ataque);
    console.log(`${personagem.nome} está com ${personagem.vida} de vida restantes.`)
  }
  perderVida(ataque: number): number{
    return this.vida = this.vida - ataque
  }
}


class Cavaleiro extends Personagem {}
class Elfa extends Personagem {}

const Joao = new Cavaleiro('Joao',130,99);
const Maria = new Elfa('Maria',1000,25);
Joao.atacar(Maria);
