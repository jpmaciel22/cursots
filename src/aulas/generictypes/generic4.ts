type ObtainKeyFn = <T,U extends keyof T>(obj: T,key: U) => T[U];
// como são tipos genéricos não podemos apenas colocar U keyof T, já que pode se rqualquer coisa... então
// afirmamos que U é de um tipo que estende ate no máximo uma chave de T, habilitando entao a possibilidade
// dele ser um Index de T.

const objeto = {
  macarena: 'cosa buena',
}

const obterKey: ObtainKeyFn = (objeto, chave) => {
  return objeto[chave];
}

// function obterKey<T, U extends keyof T>(objeto: T, chave: U): T[U] {
//   return objeto[chave];
// }

console.log(obterKey(objeto,'macarena'));

