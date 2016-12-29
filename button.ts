import { StreamSink, Stream } from 'sodiumjs';

class NumButton {
    private streamed: StreamSink<string>;
    public stream : Stream<string>;

    constructor(button : HTMLButtonElement) {
        this.streamed = new StreamSink<string>();
        this.stream = this.streamed;
        button.addEventListener('click', e => this.streamed.send(button.value));
        return this;
    }
}

export default NumButton;
