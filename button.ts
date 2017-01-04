import { Cell, Operational, Transaction} from 'sodiumjs';

class SButton {

    private btn: HTMLButtonElement;
    constructor(id: string, enabled: Cell<boolean> ) {
        this.btn = <HTMLButtonElement>document.getElementById(id);
        this.btn.addEventListener('click', e => console.log("appointment made!"))

        Operational.updates(enabled).listen(ena =>
          { console.log(ena)
          this.btn.disabled = !ena}
      );
    }
}

export default SButton;
