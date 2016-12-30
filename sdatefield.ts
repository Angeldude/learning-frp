import { Cell, CellSink, Operational } from 'sodiumjs';

class SDateField {

  private calDate : HTMLInputElement;
  private dateSink : CellSink<Date>;
  public date : Cell<Date>;

  constructor(id : string){
    this.calDate = <HTMLInputElement>document.getElementById(id);
    this.calDate.valueAsDate = new Date();
    this.dateSink = new CellSink<Date>(this.calDate.valueAsDate);
    this.date = this.dateSink;

}
}

export default SDateField;
