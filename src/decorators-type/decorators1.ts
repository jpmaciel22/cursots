export class Animal{
  constructor(public cor:string,nome:string){}
}

function decorator<T extends new (...args: any[]) => any>(target: T):T{
  return class extends target{
    cor: string;
    nome: string;
    constructor(...args: any[]){
      super(...args);
      this.cor = 'Roxo'
      //ou
      this.cor = this.inverte(args[0]) // args 0 pois na classe Animal, dentre os indices dos argumentos
      // a cor é a primeira.
      this.nome = args[1].toUpperCase();
    }

    inverte(valor:string):string{
      return valor.split('').reverse().join('')
    }
  };
}

// decorator existe para mudar qualquer coisa em qualquer classe de qualquer tipo, principalemnte em classes
// que ja estejam definidas... porém necessite mudar algo sem mexer no código.


const AnimalDecorated = decorator(Animal)
const animal = new AnimalDecorated('PRETO','cachorrinho');
console.log(animal)
