export class Carro{
  private readonly motor = new Motor();
  constructor(nome: string){}

  ligar():void{
    this.motor.ligar();
  }
  acelerar():void{
    this.motor.acelerar();
  }
  desligar():void{
    this.motor.desligar();
  }

}

export class Motor{
  ligar():void{
    console.log('Motor Ligado.');
  }
  acelerar():void{
    console.log('Motor Acelerando.');
  }
  desligar():void{
    console.log('Motor Desligado.');
  }

}

const focus = new Carro('Ford Focus')
focus.acelerar()
