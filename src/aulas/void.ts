function semRetorno(...args: string[]): void{
  console.log(args.join(' '))
}

const pessoa = {
  nome: 'Joao',
  sobrenome: 'Maciel',

  exibirNome(): void{
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Jao','Pedr');
pessoa.exibirNome()

export{ pessoa }
