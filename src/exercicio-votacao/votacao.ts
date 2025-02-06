type OpcoesP1 = 'vermelho' | 'azul' | 'verde'
type OpcoesP2 = 'javascript' | 'python' | 'typescript'
let vermelhoContador = 0;
let azulContador = 0;
let verdeContador = 0;
function getVotos1(voto:OpcoesP1):void{
  if(voto == 'vermelho'){
    vermelhoContador++;
  }
  if(voto == 'azul'){
    azulContador++;
  }
  if(voto == 'verde'){
    verdeContador++;
  }
}
let jsCount = 0;
let pyCount = 0;
let tsCount = 0;
function getVotos2(voto:OpcoesP2){
  if(voto == 'javascript'){
    jsCount++;
  }
  if(voto == 'typescript'){
    tsCount++;
  }
  if(voto == 'python'){
    pyCount++;
  }
}

const printaResultados = () => {
  console.log(`Vermelho: ${vermelhoContador}`);
  console.log(`Verde: ${verdeContador}`);
  console.log(`Azul: ${azulContador}`);

  console.log(`Javascript: ${jsCount}`);
  console.log(`Typescript: ${tsCount}`);
  console.log(`Python: ${pyCount}`);
}

getVotos1('vermelho')
getVotos1('vermelho')
getVotos1('vermelho')
getVotos1('azul')
getVotos2('typescript')
getVotos2('typescript')
getVotos2('typescript')
getVotos2('javascript')
printaResultados();
