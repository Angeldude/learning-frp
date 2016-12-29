import { Cell } from 'sodiumjs';

class Display {

  constructor(input : HTMLInputElement, cell : Cell<string>){

    cell.listen(num => {
      if(num === "")
        input.value = "0";
      else if(input.value === "0")
        input.value = num;
      else
        input.value += num;
    });

  }
}

export default Display;
