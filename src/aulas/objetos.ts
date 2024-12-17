const t: {
  keyA: string;
  keyB: string;
  keyC?: string;
  keyGOAT: string;
  [key: string]: unknown
} = {
  keyA: 'NESSA',
  keyB: 'VAMOS',
  keyGOAT: 'Luiz Otávio Miranda é o caprino.'
};

t.keyA = 'JA FUI';
t.keyC = 'chave opcional';
t.keyD = 'nova chave.'
console.log(t.keyGOAT)

