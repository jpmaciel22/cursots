/* eslint-disable */

// Tipos básicos ( aqui ocorre inferência de tipos.)
let nome: string = 'joao';
let idade: number = 2; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let hex: number = 0xf00d; // 61453 legal
let adulto: boolean = true;
let simbolo: symbol = Symbol('oi');
console.log(hex)

// Arrays
let arrayOfNumbers: Array<number> = [1,2,3,4,5]
let StringArray: Array<string> = ['Joao','legal']
// ou
let arrayDeNumeros: number[] = [1,2,3,4,5]
let arrayDeStrings: string[] = ['ooao','eegal']

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'joao',
  idade: 19,
}

//Funções
function soma(x: number, y: number): number {
  return x+y;
}
// ou
const soma2: (x: number, y:number) => number = (x,y) => x+y

