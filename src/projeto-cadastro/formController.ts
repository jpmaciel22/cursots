import validator from 'validator';

const container = document.querySelector('.container') as HTMLDivElement;

const username = container?.querySelector('.username') as HTMLInputElement;
const email = container?.querySelector('.email') as HTMLInputElement;
const password = container?.querySelector('.password')as HTMLInputElement;
const password2 = container?.querySelector('.password2')as HTMLInputElement;
const errorMessages = container?.querySelectorAll('.form-fields') as NodeListOf<HTMLDivElement>;

function validaUsuario(nomeDeUsuario: string): boolean{
  if(nomeDeUsuario.length >= 8 && nomeDeUsuario.length <= 30){
    return true;
  }
  return false;
}
function validaEmail(email: string): boolean {
  return validator.isEmail(email);
}
function validaSenha(senha: string,repetirsenha: string): boolean{
  if(senha === repetirsenha){
    return true
  }
  return false
}

function checaCampoVazio(...inputs: HTMLInputElement[]): void{
    for(let i = 0; i < inputs.length; i++){
      if(!inputs[i].value){
        mostrarErro(errorMessages[i])
      }
    }
}

function mostrarErro(div: HTMLDivElement): void {
  div.classList.add('show-error-message');  // Adiciona a classe para mostrar o erro
}

function limparErros(): void {
  errorMessages.forEach((div) => {
    div.classList.remove('show-error-message');  // Remove a classe de erro antes de validar novamente
  });
}

function executar():void{
  document.addEventListener('submit',(ev: Event) => {
    ev.preventDefault()
    limparErros();
    checaCampoVazio(username,email,password,password2);
    let isValid = true;
    if (!validaUsuario(username.value)) {
      mostrarErro(errorMessages[0] as HTMLDivElement);
      isValid = false;
    }
    if (!validaEmail(email.value)) {
      mostrarErro(errorMessages[1] as HTMLDivElement);
      isValid = false;
    }
    if (!validaSenha(password.value, password2.value)) {
      mostrarErro(errorMessages[2] as HTMLDivElement);
      mostrarErro(errorMessages[3] as HTMLDivElement);
      isValid = false;
    }
  })
}

executar()


// abaixo colocarei outra forma em que poderia ter sido feito:

/**
 * function showErrorMessages(input: HTMLInputElement):void{
 *  const formFields = input.parentElement as HTMLDivElement;
 *  formFields.classList.add('show-error-message');
 * }
 *
 * function hideErrorMessages(formfield: HTMLDivElement):void{
 *  formfield.querySelectorAll('.show-error-message').forEach(item => item.classList
 * .remove('.show-error-message'))
 * }
 *
 * function checkForEmptyFields(...inputs: HTMLInputElement[]): void{
 *  inputs.forEach((input) => {
 *    if(!input.value){
 *      showErrorMessages(input)
 *    }
 * })
 * }
 */
