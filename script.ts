import Button from './button';
import TextField from './stextfield';

const clrButton = new Button("clear");

const cleared = clrButton.clr.map( u => '');

const sText = new TextField("txtField", cleared);
