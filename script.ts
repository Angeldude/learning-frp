import TextField from './stextfield';
import Label from './label';

const txtOne = new TextField('one');
const txtTwo = new TextField('two');

const num = txtOne.text.map(e => parseInt(e));
const num2 = txtTwo.text.map(e => parseInt(e));

const combine = num.lift(num2, (a,b) => isNaN(a + b) ? 0 : a + b);

const result = new Label('result', combine.map(e => e.toString()));
