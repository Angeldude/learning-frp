import CalcLogic from './calclogic';

var poor = new CalcLogic();
poor.add("3");
poor.add("34");
poor.setTotal("0");
poor.add("0");
poor.multi("3");

console.log(poor.getTotal());
