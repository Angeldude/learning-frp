import SDateField from './sdatefield';
import Button from './button';
import { lambda2, Cell, Transaction } from 'sodiumjs';

const dep = new SDateField('dep');
const ret = new SDateField('ret');

const valid : Cell<boolean> = dep.date.lift(ret.date, lambda2((d, r) => d <= r, [dep.date, ret.date]));

const btn = new Button('button', valid);
