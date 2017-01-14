import { CellLoop, Transaction } from 'sodiumjs';
import Button from './button';
import Label from './label';

const sPlus = new Button('plus').stream.map(u => 1);
const sMinus = new Button('minus').stream.map(u => -1);
const sDelta = sPlus.orElse(sMinus);

Transaction.run(() => {
  const value = new CellLoop<number>();
  const update = sDelta.snapshot(value, (eventVal, val) => eventVal + val)
                .filter((a) => a >= 0);

  value.loop(update.hold(0));

  const aString = value.map(e => e.toString());
  const sumLabel = new Label('sum', aString);

})
