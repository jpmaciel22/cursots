type FilterCallback = (
  value: unknown,
  array?: unknown[],
  index?: number,
) => boolean;

export function MyFilterFunction<TipoGenerico>(
  array: TipoGenerico[],
  callbackfn: FilterCallback
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
  if(typeof value === 'number')return value < 5;
  return false
});
console.log(myFilteredArray)
