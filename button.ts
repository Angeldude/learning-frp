import { Cell } from 'sodiumjs';

class SButton {

    private btn: HTMLButtonElement;
    private listener;
    constructor(id: string, enabled = new Cell<boolean>(true)) {
        this.btn = <HTMLButtonElement>document.getElementById(id);
        this.btn.addEventListener('click', e => alert("appointment made!"))

        enabled.listen(ena =>
          this.btn.disabled = !ena
      );
    }
}

export default SButton;
