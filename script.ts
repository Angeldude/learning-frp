import SDateField from './sdatefield';
import SButton from './button';
import { lambda2 } from 'sodiumjs';

const dep = new SDateField('dep');
const ret = new SDateField('ret');

const valid = dep.date.lift(ret.date, lambda2((d, r) => d <= r,
[dep.date, ret.date]));

const btn = new SButton('button', valid);
