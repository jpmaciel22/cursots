function InverteCor(param1:string,param2:string){
  return function <T extends new (...args: any[]) => any>(target: T):T{
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
      };
      inverteDePalhacada(valor:string):string{
        return valor.split('').reverse().join('') + param1 + param2
      }
    };
  };
}

// decorator existe para mudar qualquer coisa em qualquer classe de qualquer tipo, principalemnte em classes
// que ja estejam definidas... porém necessite mudar algo sem mexer no código.
@InverteCor('teste','TESTADO')
export class Animal{
  constructor(public cor:string,nome:string){}
}


// const AnimalDecorated = decorator(Animal) // ou utilizar o @decorator em cima da classe
const animal = new Animal('PRETO','cachorrinho');
console.log(animal)
