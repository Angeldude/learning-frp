import { Stream, CellSink, Cell } from 'sodiumjs';

class TextField {

  private txt: HTMLInputElement;
  private sink: CellSink<string>;
  public text: Cell<string>;
  constructor(id: string){
    this.txt = <HTMLInputElement>document.getElementById(id);

    this.sink = new CellSink<string>(this.txt.value)
    this.text = this.sink;

    this.txt.addEventListener('input', e => {
      this.sink.send(this.txt.value);
    });
  }
}

export default TextField;
