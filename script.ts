import Display from './display';
import Keys from './btns';

(function init() {
    const keyPad = new Keys();

    var value = keyPad.toDisplay.hold("");

    const display = new Display(
      <HTMLInputElement>document.getElementById('display'), value);

})()
