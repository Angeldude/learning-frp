import Button from './button';
import Label from './label';
import TextField from './stextfield';

const translate = function(unit, text: string): string{
  return text === "" ? "" : text.split(' ').map(txt => txt + "us").join(' ');
}

const translateButton = new Button('trans');
const textField = new TextField('text');
const sLatin = translateButton.stream.snapshot(textField.text, translate);

const latin = sLatin.hold('');

const transLabel = new Label('lbl', latin);
