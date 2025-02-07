type ElementosHtml = {
    botaoConverter: HTMLButtonElement,
    valorInserido: HTMLInputElement,
    from: HTMLSelectElement,
    to: HTMLSelectElement
    resultado: HTMLParagraphElement
}
interface Metodos {
    executarProgama(): void,
    converter():void,
}
export default class Aplicativo implements Metodos {
   private botaoConverter: HTMLButtonElement;
   private valorInserido: HTMLInputElement;
   private from: HTMLSelectElement;
   private to: HTMLSelectElement;
   private resultado: HTMLParagraphElement

   constructor(ElementoDaPagina: ElementosHtml){
    this.botaoConverter = ElementoDaPagina.botaoConverter;
    this.valorInserido = ElementoDaPagina.valorInserido;
    this.from = ElementoDaPagina.from;
    this.to = ElementoDaPagina.to;
    this.resultado = ElementoDaPagina.resultado
   }

   executarProgama(): void {
    this.botaoConverter.addEventListener('click', (event) => {
        event.preventDefault();
        this.converter();
        });
    };
    converter(): void {
       const valorInserido = this.valorInserido.value
       const de = this.from.value
       const para = this.to.value
       const resultadoEscopo = this.resultado
       async function fetchData() { // pra pegar os dados da api do json
        const url = 'https://economia.awesomeapi.com.br/json/last/'+de+'-'+para
        const response = await fetch(url);
        const dadosObtidos = await response.json();
        const valorHigh:string = dadosObtidos[de+para].high;
        const resultadoFinal = (Number(valorHigh) * Number(valorInserido)).toFixed(2)
        resultadoEscopo.innerText = `${resultadoFinal} ${para}`
       }
       fetchData();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const aplicativo = new Aplicativo({
        botaoConverter: document.getElementById('submit') as HTMLButtonElement,
        valorInserido: document.getElementById('amount') as HTMLInputElement,
        from: document.getElementById('from') as HTMLSelectElement,
        to: document.getElementById('to') as HTMLSelectElement,
        resultado: document.getElementById('converted-value') as HTMLParagraphElement
    });
    aplicativo.executarProgama();
});