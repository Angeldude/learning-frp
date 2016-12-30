import { Cell, Transaction, Operational } from 'sodiumjs';

class Button {

    private btn: HTMLButtonElement;
    private listener;
    constructor(id: string, enabled = new Cell<boolean>(false)) {
        this.btn = <HTMLButtonElement>document.getElementById(id);
        this.btn.disabled = enabled.sample();

    }
}

export default Button;
