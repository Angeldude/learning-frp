import NumButton from './button';

class Keys {
  private btn0;
  private btn1;
  private btn2;
  private btn3;
  private btn4;
  private btn5;
  private btn6;
  private btn7;
  private btn8;
  private btn9;
  public clr;
  public toDisplay;

  constructor(){
    this.btn1 = new NumButton(<HTMLButtonElement>document.getElementById('button-1'))
          .stream.map(u => parseInt(u));

    this.btn2 = new NumButton(<HTMLButtonElement>document.getElementById('button-2'))
          .stream.map(u => parseInt(u));

    this.btn3 = new NumButton(<HTMLButtonElement>document.getElementById('button-3'))
          .stream.map(u => parseInt(u));
    this.btn4 = new NumButton(<HTMLButtonElement>document.getElementById('button-4'))
                .stream.map(u => parseInt(u));

    this.btn5 = new NumButton(<HTMLButtonElement>document.getElementById('button-5'))
                      .stream.map(u => parseInt(u));

    this.btn6 = new NumButton(<HTMLButtonElement>document.getElementById('button-6'))
                            .stream.map(u => parseInt(u));

    this.btn7 = new NumButton(<HTMLButtonElement>document.getElementById('button-7'))
                                  .stream.map(u => parseInt(u));

    this.btn8 = new NumButton(<HTMLButtonElement>document.getElementById('button-8'))
                                        .stream.map(u => parseInt(u));

    this.btn9 = new NumButton(<HTMLButtonElement>document.getElementById('button-9'))
                                              .stream.map(u => parseInt(u));

    this.btn0 = new NumButton(<HTMLButtonElement>document.getElementById('button-0'))
                .stream.map(u => parseInt(u));

    this.clr = new NumButton(<HTMLButtonElement>document.getElementById('clear')).stream;

    this.toDisplay = this.btn1.orElse(this.btn2)
           .orElse(this.btn3).orElse(this.btn4).orElse(this.btn5)
           .orElse(this.btn6).orElse(this.btn7).orElse(this.btn8)
           .orElse(this.btn9).orElse(this.btn0);
  }
}

export default Keys;
