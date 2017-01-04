import SDateField from './sdatefield';
import SButton from './button';
import Rule from './rule';

const unlucky = function(dt : Date){
  var day : number = dt.getUTCDate();
  return (day === 4 || day === 14 || day === 24);
}

const dep = new SDateField('dep');
const ret = new SDateField('ret');

const r1 = new Rule((d,r) => d <= r);
const r2 = new Rule((d,r) => !unlucky(d) && !unlucky(r));
const r = r1.and(r2);

const valid = r.reify(dep.date, ret.date);

const btn = new SButton('button', valid);
