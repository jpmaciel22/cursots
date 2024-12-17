let x: unknown;
x = 100;
x = 'PEDRO';
x = 90;
x = '10';
const y = 800;

// console.log(x+y) // aqui vai dar erro, pois o unknown é como uma seguranca, voce so
// é permitido fazer estas operacoes caso haja uma checagem antes
// o exemplo a seguir funciona:

if(typeof x === 'number') console.log(x+y)


// ----------------------------
function addOrConcat(a: number | string, b: number | string) {
  // return a+b // da erro pois ele n aceita somar caso seja string ent deve fazer checagem para funcionar
  if(typeof a === 'number' && typeof b === 'number') return a+b;
  return `${a}${b}`

  // percebe-se que agora o typescript aceita essas condicoes e já propõe como retorno
  // string | number
}
