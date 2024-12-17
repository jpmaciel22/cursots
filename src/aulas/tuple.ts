const DadosCliente1: [number,string] = [19,'Joao']
const DadosCliente2: [number,string,string] = [19,'Jao','JOAO']
// DadosCliente2[3] = 'PEDRO' // da errado pois so marcamos ate a [2]
const DadosCliente3: [number,string,string?] = [18,'PEDRO'] // o terceiro é opcional
const DadosCliente4: [number,string,...string[]] = [1,'PEDRO','QUALQUER', 'COISA', 'QUANTIDADE']
// como adicionamos um rest podemos adicionar qlqr dado após contanto que seja string

// para forcar a adicao em uma casa nao permitida como no caso do DadosCliente1 precisariamos
// utilizar o push, mas não é um comportamento desejavel.
DadosCliente1.push(18)

console.log(DadosCliente1)

// para bloquear esse comportamento fariamos algo do tipo:

const DadosCliente5: readonly [number,string] = [19,'joao']
// agora nao podemos nem alterar diretamente por atribuicao nem dar push.
