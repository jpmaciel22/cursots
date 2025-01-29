export class Pessoa {
constructor(
  public nome: string,
  public sobrenome: string,
  private idade: number,
  protected cpf: string,
){}
getIdade(): number{
  return this.idade;
}
getCpf(): string{
  return this.cpf.replace(/\D/g, '');
}
setCpf(valor:string){
  this.cpf = valor
}
getNomeCompleto(): string{
  return this.nome + this.sobrenome
}
}

export class Aluno extends Pessoa{
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ){
    super(nome,sobrenome,idade,cpf);
    this.sala = sala;
  }
  getNomeCompleto(): string {
    return 'Oh sim, isto pertence ao aluno(a): '+ this.nome + ' ' + this.sobrenome
  }
}
export class Cliente extends Pessoa{
  getNomeCompleto(): string {
    return 'Obrigado pela compra sr(a). :' + this.nome + ' ' + this.sobrenome
  }
}

const alien = new Pessoa("kazzrym","n'whar",318,'133.788.155-26')
const aluno = new Aluno('joao','maciel',20,'000.000.000-00','317');
const cliente = new Cliente('pedro','maciel',25,'111.111.111-11');
aluno.setCpf('555.555.666-77')
