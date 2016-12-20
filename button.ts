import { Stream, Unit, StreamSink } from 'sodiumjs';

class Button {
  private button : HTMLElement;
  private streamed : StreamSink<Unit>;
  public stream : Stream<Unit>;

  constructor(name: string, id: string){
    this.button = document.createElement('button');
    this.button.textContent = name;
    this.streamed = new StreamSink<Unit>();
    this.stream = this.streamed;

    this.button.addEventListener('click', (event : Event) =>{
      this.streamed.send(Unit.UNIT);
    });

    this.render(id);
  }

  render(id): Button
  {
    let x = document.getElementById(id);
    x.appendChild(this.button);
    return this;
  }
}


export default Button;
