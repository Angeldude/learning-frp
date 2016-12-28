import { StreamSink } from 'sodiumjs';

const display = <HTMLInputElement>document.getElementById('display');
const btn1 = <HTMLButtonElement>document.getElementById('button-1');
const btn2 = <HTMLButtonElement>document.getElementById('button-2');
const btnPlus = <HTMLButtonElement>document.getElementById('button-plus');

var stream = new StreamSink<string>();

btn1.addEventListener('click', e => stream.send("1"));
btn2.addEventListener('click', e => stream.send("2"));
btnPlus.addEventListener('click', e => stream.send("+"));

var poop = stream.accum(0, function(e, last){
  var result = parseInt(e) + last;
  console.log(last);
  return result;
});

poop.listen(function(e){
  display.value = e.toString();
})

console.log(display.value);
