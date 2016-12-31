import { Cell, CellSink } from 'sodiumjs';

class SDateField {

    private calDate: HTMLInputElement;
    private dateSink: CellSink<Date>;
    public date: Cell<Date>;

    constructor(id: string) {
        this.calDate = <HTMLInputElement>document.getElementById(id);
        this.dateSink = new CellSink<Date>(new Date());
        this.calDate.valueAsDate = this.dateSink.sample();
        this.date = this.dateSink;
        this.calDate.addEventListener('change', e => {
          this.dateSink.send(this.calDate.valueAsDate)
        })
    }
}

export default SDateField;
