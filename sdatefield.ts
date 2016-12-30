import { Cell, Operational } from 'sodiumjs';

class SDateField {

  private calDate : HTMLInputElement;
  public date : Cell<Date>;

  constructor(id : string){
    this.calDate = <HTMLInputElement>document.getElementById(id);
    this.calDate.valueAsDate = new Date();
    this.date = new Cell<Date>(this.calDate.valueAsDate);
    this.calDate.addEventListener('change', e => {
      this.date = new Cell<Date>(this.calDate.valueAsDate);
    })

  }
}

export default SDateField;
