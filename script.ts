import Button from './button';
import Label from './label';

const sPlus = new Button('plus').stream.map(u => 1);
const sMinus = new Button('minus').stream.map(u => -1);
const sDelta = sPlus.orElse(sMinus);

const update = sDelta.accum(0, (eventVal, val) => {
  return (eventVal + val) >= 0 ? eventVal + val : 0;
});

const aString = update.map(e => e.toString());
const spinLabel = new Label('sum', aString);
