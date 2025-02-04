type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
}

function translateColor(cor: CoresChaves, cores:CoresObj){
  return cores[cor]
}

console.log(translateColor('roxo',coresObj))
