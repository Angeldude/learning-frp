import  Button  from './button';

const a = new Button("Clear", "app");
const cleared = a.stream.map(u => '');
var cool = cleared.listen(x => console.log("hi"));
