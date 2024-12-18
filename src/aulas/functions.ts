type CallbackFN = (param: number) => number // assim que se tipa funcoes
// type MapZudo = (param: number[], fn: Function) => number[]


function mapStrings(array: number[], callbackfn: CallbackFN): number[] {
const newArray: number[] = []

  for(let i = 0; i < array.length; i++){
    newArray.push(callbackfn(array[i]))
  }
return newArray
}
const array1: Array<number> = [1,2,3,4,5]
console.log(mapStrings(array1, (number) => number*2)) // utilizando arrow functions, nesse caso nao precisa
// tipar pois nos ja tipamos a funcao ! entao ele sabe oq ira receber.
