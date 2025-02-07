namespace FirstNamespace{
  const nome = 'Joao'

  export class Pessoa{
    constructor(public nome: string){

    }
  }

  const pessoa = new Pessoa('Joao');
  console.log(pessoa)
}
//  para usar algo do namespace fora do escopo dele é necessário:
const pessoa2 = new FirstNamespace.Pessoa('Joao')

// export default true;
