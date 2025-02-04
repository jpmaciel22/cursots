interface Pessoa1{
  nome: string;
}

interface Pessoa1{
  readonly sobrenome: string;
}

interface Pessoa1{
  readonly enderecos: string[];
}

interface Pessoa1{
  idade?: number;
}

const pessoazz: Pessoa1 ={
  nome: 'Luiz',
  sobrenome: 'Magalhães',
  enderecos: ['Av. Haddock Lobo'],
  idade: 33
}
