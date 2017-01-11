
class CalcLogic {

  private total: number;

  constructor(){
    this.total = 0;
  }

  setTotal(n: string){
    this.total = this.convertToNum(n);
  }

  add(n: string) {
    this.total += this.convertToNum(n);
  }

  sub(n: string){
    this.total -= this.convertToNum(n);
  }

  multi(n: string) {
    this.total *= this.convertToNum(n);
  }

  divi(n: string) {
    this.total /= this.convertToNum(n);
  }

  getTotal(){
    return this.total.toString();
  }

  convertToNum(n: string){
    return parseInt(n);
  }
}

export default CalcLogic;
