import Button from './button';
import Label from './label';
import TextField from './stextfield';

function translate(text: string): string{
  return text.split(' ').map(e => e + "us").join(' ');
}

const translateButton = new Button('trans');
const textField = new TextField('text');
const sLatin = translateButton.stream.snapshot(textField.text, (u,t)=> {
  return translate(t);
});

const latin = sLatin.hold('');

const transLabel = new Label('lbl', latin);
