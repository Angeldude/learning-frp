import { Cell } from 'sodiumjs';

class Label {

  private label;
  constructor(id: string, text: Cell<string>,){
    this.label = document.getElementById(id);
    text.listen(t => {
      this.label.textContent = t;
    })
  }
}

export default Label;
