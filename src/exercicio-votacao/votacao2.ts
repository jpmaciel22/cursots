type pollOption = {
  votes: number;
  option: string;
}

export class Votacao {
  private pollOptions: pollOption[] = [];
  constructor(public perguntas: string){}
  criaVotacao(pollOption: pollOption):void{
    this.pollOptions.push(pollOption);
  }
  vote(pollIndex:number):void{
    this.pollOptions[pollIndex].votes++;
  }
  printResults():void{
    console.log(this.perguntas)
    for(let i = 0; i<this.pollOptions.length; i++){
      console.log(`${this.pollOptions[i].option}: ${this.pollOptions[i].votes}`)
    }
  }
}
const votacao = new Votacao('Qual sua linguagem de programação favorita?');
votacao.criaVotacao({votes: 0,option: 'javascript'})
votacao.criaVotacao({votes: 0,option: 'typescript'})
votacao.criaVotacao({votes: 0,option: 'python'})
votacao.vote(1)
votacao.printResults()
