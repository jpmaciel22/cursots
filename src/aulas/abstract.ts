export abstract class Personagem{
  constructor(
    protected nome: string,
    protected ataque: number,
    public vida: number,
  ){}

  atacar(personagem: Personagem): void{
    if(this.vida <= 0){return console.log(`${this.nome} morreu`)}
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
    console.log('Não perderei dessa vez... 🧝‍♀️')
  }
}

const randataqueJ = Math.trunc(Math.random()* (85000-50000) + 50000)
const randataqueM = Math.trunc(Math.random() * (470000 - 25000) + 25000)
const Joao = new Mago('Joao',randataqueJ,46875);
const Maria = new Elfa('Maria',randataqueM,150000);

function rodarJogo(pers1:Mago,pers2:Elfa):void{
  while(pers1.vida > 0 && pers2.vida > 0){
    pers1.atacar(pers2)
    pers1.atacar(pers2)
    pers2.atacar(pers1)
    }
  }

rodarJogo(Joao,Maria)
