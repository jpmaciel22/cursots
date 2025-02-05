type FilterCallback<TipoGenerico> = (
  value: TipoGenerico,
  array?: TipoGenerico[],
  index?: number,
) => boolean;

export function MyFilterFunction<TipoGenerico>(
  array: TipoGenerico[],
  callbackfn: FilterCallback<TipoGenerico>
): TipoGenerico[]{
  const novoArray = [];

  for(let i = 0;i<array.length;i++){
    if(callbackfn(array[i])){
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const array = [1,2,3,4,5,6,7,8,9,10];

const filteredArrayDefault = array.filter((value) => value < 5)
console.log(filteredArrayDefault)
const myFilteredArray = MyFilterFunction(array,(value) => {
  // if(typeof value === 'number'){
  return value < 5; //} // agora nao precisa mais dessas adaptações pois o typescript ja entendeu que é um number
  // return false
});
console.log(myFilteredArray)


// Ao colocarmos <TipoGenerico> podemos permitir à função de receber o tipo que será esperado para a função,
// portanto nao precisamos colocar unknown e adaptar a funcao ao tipo que iremos receber,
//  mas sim colocar TipoGenerico e o typescript de forma inteligente saberá qual tipo receberá a partir
// da variavel chamando esta funcao.
