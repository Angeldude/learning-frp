import { Cell } from 'sodiumjs';

class Display {

  private store1 : number = 0;
  constructor(input : HTMLInputElement, cell : Cell<string>){

    cell.listen(num => {
      if(num === ""){
        input.value = "0";
        this.store1 = 0;
      }
      else if(input.value === "0" && !isNaN(parseInt(num)))
        input.value = num;

      else if(num === "plus"){
        this.store1 += parseInt(input.value);
        input.value = this.store1.toString();
      }
      else if(num === "equals"){
        this.store1 = 0;
      } else
        input.value += num;
    });

  }
}

export default Display;
