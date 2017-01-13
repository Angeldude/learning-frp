import { Stream, CellSink } from 'sodiumjs';

class TextField {

  private txt: HTMLInputElement;
  public sink;
  constructor(id: string, btn: Stream<string>){
    this.txt = <HTMLInputElement>document.getElementById(id);
    btn.listen(s => {
      this.txt.value = s;
    })

    this.sink = new CellSink<string>(this.txt.value)

    this.txt.addEventListener('input', e => {
      this.sink.send(this.txt.value);
    });
  }
}

export default TextField;
