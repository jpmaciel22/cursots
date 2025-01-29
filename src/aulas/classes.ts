export class Empresa {
  readonly nomeEmpresa: string; // public é redundante
  private readonly colaboradores: Colaborador[] = []
  protected readonly cnpj: string;
  constructor(nomeEmpresa: string, cnpj: string){
    this.nomeEmpresa = nomeEmpresa;
    this.cnpj = cnpj
  }
  adicionaColaborador(colaborador: Colaborador): void{
    this.colaboradores.push(colaborador)
  }
  mostrarColaborador(): void{
    for(const i of this.colaboradores){
      console.log(i)
    }
  }
  getCnpj(): String{
    return this.cnpj
  }
}
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ){}
}
const empresa1 = new Empresa('Udemy Inc Associates Company Org','12.345.678/9101-11');
const colaborador1 = new Colaborador('Joao','Maciel')
const colaborador2 = new Colaborador('Luanderson','Santinelli')
empresa1.adicionaColaborador(colaborador1)
empresa1.adicionaColaborador(colaborador2)
console.log(empresa1)
empresa1.mostrarColaborador()
console.log(empresa1.getCnpj())
