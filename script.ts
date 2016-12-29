import Display from './display';
import Keys from './btns';

class OpButton {
  constructor(operator){
    "fd"
  }
}

(function init() {
    const keyPad = new Keys();

    var value = keyPad.toDisplay.hold("");

    const display = new Display(
      <HTMLInputElement>document.getElementById('display'), value);

})()
