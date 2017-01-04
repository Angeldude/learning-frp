import { Cell, lambda2 } from 'sodiumjs';

class Rule {

  public f : (a : Date, b: Date) => boolean;

  constructor(f : (a : Date, b: Date) => boolean ){
    this.f = f;
  }

  reify(dep : Cell<Date>, ret : Cell<Date>): Cell<boolean>{
     return dep.lift(ret, lambda2(this.f, [dep,ret]));
  }

  and(other : Rule) : Rule{
    return new Rule((d,r) => {
      return this.f.apply(d,r) && other.f.apply(d,r)
    });
  }
}

export default Rule;
