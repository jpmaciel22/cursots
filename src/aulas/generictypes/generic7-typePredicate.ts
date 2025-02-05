export function isNumber(value: unknown): value is number /**boolean */ {
  return typeof value === 'number'
};

export function soma<G>(...args: G[]): number | null{
  const retorno = args.reduce((sum,value)=>{
    if(isNumber(value) && isNumber(sum)){
      return sum + value;
    }
    return sum;
  },0)
  return retorno;
}
// aqui no caso nao estava dando certo antes, quando na primeira funcao estava dando como retorno
//  'boolean', pois aparentemente o typescript não consegue passar a inferência de 'value é number' para fora
//  do escopo daquela função, então mesmo fazendo typeguard na segunda função, ainda assim o typescript
// reclamava de soma de NUMBER COM G.
//  portanto precisamos afirmar na primeira funcao q o retorno DAQUELE BOOLEAN é que O VALOR É UM NUMERO
// entao ele precisa desse contexto a mais sobre o que aqle true retornado significa.

console.log(soma(1,2,3,4,1,2,45,60))
