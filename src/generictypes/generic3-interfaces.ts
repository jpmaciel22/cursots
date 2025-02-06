interface GenericPerson<T,U>{
  name: T,
  surname: T,
  age: U;
}

// ou

interface GenericPerson2<T=string,U=number>{
  name: T,
  surname: T,
  age: U;
}

const aluno: GenericPerson<string,number> = {
  name: 'Joao', surname:'MMMMMM', age: 20
};
console.log(aluno)

const aluno2: GenericPerson2 = {
  name:'Joao',surname:'MMMMM', age: 20
}
