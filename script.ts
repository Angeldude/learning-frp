import Display from './display';
import Keys from './btns';

class OpButton {
  constructor(operator){
    "fd"
  }
}

(function init() {
    var keyPad = new Keys();

    const display = new Display(document.getElementById('display'), keyPad.toDisplay, keyPad.clr);

})()
