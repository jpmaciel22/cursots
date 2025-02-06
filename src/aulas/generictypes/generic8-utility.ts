// Record
type CatName = "miffy" | "boris" | "mordred";
type AnimalName = string;

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
const dogs: Record<AnimalName,CatInfo> = {
  pimenta: {age: 4, breed: 'shih tzu'},
}

console.log(cats.boris)

// Required
type Carro = {
  nome: string,
  ano: number,
  motor?: string,
}

type CarroRequired = Required<Carro>

const carro1: CarroRequired ={
  nome: 'Ford Focus',
  ano: 2018,
  motor: 'Ecosport 2.0'
  // aqui é tudo necessário.
}

const carro2: Carro = {
  nome: 'Camaro',
  ano: 2014
}

// Partial
type CarroPartial = Partial<Carro>
const carro3: CarroPartial = {
// aqui no caso é tudo opcional....
}

// Readonly
type CarroReadonly = Readonly<Carro>

// Pick
type CarroPick = Pick<CarroRequired, 'ano' | 'motor'>

const carro4: CarroPick = {
  ano: 2020,
  motor: 'AE888'
}

// Extract Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExtract = Extract<ABC,CDE> //C
type TipoExclude = Exclude<ABC,CDE> //A,B

//
type AccountMongo = {
  _id: string,
  nome: string,
  password: string,
};
// type AccountAPI = {
//   id: string,
//   nome: string,
//   password: string,
// }

type AccountAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id:string;
};
const accountMongo: AccountMongo = {
  _id: 'ajsdadjocxv8',
  nome: 'Joao',
  password: 'mzjuvnxviu9'
}
function mapAccount(accountMongo: AccountMongo): AccountAPI{
  const {_id,...accountData} = accountMongo;
  return {...accountData, id: _id};
}

