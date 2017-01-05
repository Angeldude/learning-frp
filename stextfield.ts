import { Stream } from 'sodiumjs';

class TextField {

  private txt: HTMLInputElement;
  constructor(id: string, btn: Stream<string>){
    this.txt = <HTMLInputElement>document.getElementById(id);
    btn.listen(s => {
      this.txt.value = s;
    })
  }
}

export default TextField;
