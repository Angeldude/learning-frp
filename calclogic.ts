
class CalcLogic {

  private total: number;

  constructor(){
    this.total = 0;
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

  convertToNum(n: string){
    return parseInt(n);
  }
}
