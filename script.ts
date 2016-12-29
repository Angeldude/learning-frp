import NumButton from './button';
import Display from './display';

class OpButton {
  constructor(operator){
    "fd"
  }
}

(function init() {
    var btn1 = new NumButton(<HTMLButtonElement>document.getElementById('button-1'))
          .stream.map(u => parseInt(u))

    var btn2 = new NumButton(<HTMLButtonElement>document.getElementById('button-2'))
          .stream.map(u => parseInt(u))

    var btn3 = new NumButton(<HTMLButtonElement>document.getElementById('button-3'))
          .stream.map(u => parseInt(u))

    var toDisplay = btn1.orElse(btn2)
            .orElse(btn3);

    var display = new Display(document.getElementById('display'), toDisplay);

})()
