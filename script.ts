import Button from './button';
import TextField from './stextfield';

const onegai = new Button("onegai");
const thanks = new Button("thanks");

const japanese = onegai.stream.map(u => 'Onegai shimasu');

const english = thanks.stream.map( u => 'Thank you');

const scanned = japanese.orElse(english);

const sText = new TextField("txtField", scanned);
