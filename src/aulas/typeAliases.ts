// export abstract class PessoaType{
//   protected abstract nome: string;
//   protected abstract sobrenome: string;
//   protected abstract nomeCompleto(): string;
// }

//mesma coisa abaixo porem utilizando type

type PessoaType = {
  nome: string;
  sobrenome: string;
  nomeCompleto: () => string;
}

export class Pessoa implements PessoaType {
  constructor(public nome: string, public sobrenome: string){
  }
  public nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}
const pessoinha = new Pessoa('Joao', 'Pedruco');
console.log(pessoinha.nomeCompleto())
