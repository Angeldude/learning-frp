import { Stream, StreamSink, Unit } from 'sodiumjs';

class Button {

  public clr: Stream<Unit>;
  private streamed: StreamSink<Unit>;
  private btn: HTMLElement;

  constructor(id: string){
    this.btn = document.getElementById(id);
    this.streamed = new StreamSink<Unit>();
    this.clr = this.streamed;
    this.btn.addEventListener('click', e => {
      this.streamed.send(Unit.UNIT);
    })
  }

}

export default Button;
