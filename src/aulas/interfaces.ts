interface NameType  {
  nome: string;
}
interface SurnameType {
  sobrenome: string;
}
interface FullnameType {
  fullName: () => string;
}

type PessoaType = NameType & SurnameType & FullnameType

export class Pessoa implements PessoaType {
  constructor(public nome: string, public sobrenome: string){
  }
  public fullName(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}
const pessoinha = new Pessoa('Joao', 'Pedruco');
console.log(pessoinha.fullName())
