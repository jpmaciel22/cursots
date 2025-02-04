export class Calc{
  constructor(public number: number){

  }
  add(n: number):this{
    this.number += n;
    return this
  }
  div(n: number):this{
    this.number /= n;
    return this
  }
  sub(n: number):this{
    this.number -= n;
    return this
  }
  mult(n: number):this{
    this.number *= n;
    return this
  }
}

export class SubCalc extends Calc{
  pow(n: number):this{
    this.number **= n;
    return this
  }
}

const calc1 = new Calc(42);
calc1.add(2).mult(5).div(2).sub(5);
console.log(calc1)
const calc2 = new SubCalc(13)
calc2.add(55).pow(3)
console.log(calc2)


// Builder - GoF

export class RequestBuilder{
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this{
    this.method = method;
    return this;
  }
  setUrl(url: string):this{
    this.url = url
    return this;
  }

  send():void{
    console.log(`Enviando dados via ${this.method} para ${this.url}`)
  }
}
