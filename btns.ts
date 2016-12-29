import NumButton from './button';
import { Stream } from 'sodiumjs';

class Keys {
    private btn0: Stream<string>;
    private btn1: Stream<string>;
    private btn2: Stream<string>;
    private btn3: Stream<string>;
    private btn4: Stream<string>;
    private btn5: Stream<string>;
    private btn6: Stream<string>;
    private btn7: Stream<string>;
    private btn8: Stream<string>;
    private btn9: Stream<string>;
    private clr: Stream<string>;
    public toDisplay: Stream<string>;

    constructor() {
        this.btn1 = new NumButton(<HTMLButtonElement>document.getElementById('button-1'))
            .stream;

        this.btn2 = new NumButton(<HTMLButtonElement>document.getElementById('button-2'))
            .stream;

        this.btn3 = new NumButton(<HTMLButtonElement>document.getElementById('button-3'))
            .stream;
        this.btn4 = new NumButton(<HTMLButtonElement>document.getElementById('button-4'))
            .stream;

        this.btn5 = new NumButton(<HTMLButtonElement>document.getElementById('button-5'))
            .stream;

        this.btn6 = new NumButton(<HTMLButtonElement>document.getElementById('button-6'))
            .stream;

        this.btn7 = new NumButton(<HTMLButtonElement>document.getElementById('button-7'))
            .stream;

        this.btn8 = new NumButton(<HTMLButtonElement>document.getElementById('button-8'))
            .stream;

        this.btn9 = new NumButton(<HTMLButtonElement>document.getElementById('button-9'))
            .stream;

        this.btn0 = new NumButton(<HTMLButtonElement>document.getElementById('button-0'))
            .stream;

        this.clr = new NumButton(<HTMLButtonElement>document.getElementById('clear')).stream;

        this.toDisplay = this.btn1.orElse(this.btn2)
            .orElse(this.btn3).orElse(this.btn4).orElse(this.btn5)
            .orElse(this.btn6).orElse(this.btn7).orElse(this.btn8)
            .orElse(this.btn9).orElse(this.btn0).orElse(this.clr);

    }
}

export default Keys;
