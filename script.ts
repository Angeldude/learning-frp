//text lbl
import { Cell, CellSink } from 'sodiumjs';

class TextField {

  private input: HTMLInputElement;
  private sink: CellSink<string>;
  public text: Cell<string>;

  constructor(init : string, id: string){
    this.input = <HTMLInputElement>document.getElementById(id);
    this.input.value = init;
    this.sink = new CellSink<string>(this.input.value);
    this.text = this.sink;

    this.input.addEventListener('input', e => {
      this.sink.send(this.input.value);
    });

  }
}

class Label {

  private label;
  constructor(text: Cell<string>, id: string){
    this.label = document.getElementById(id);
    text.listen(t => {
      this.label.textContent = t;
    })
  }
}

const txt = new TextField("hello", "text");
const reversed = txt.text.map(t => t.split('').reverse().join(''));
const label = new Label(reversed, "lbl");
