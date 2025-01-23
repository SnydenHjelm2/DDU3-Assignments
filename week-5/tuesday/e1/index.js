
class C {
  constructor (p) {
    this.p1 = p;
    this._p2 = 0;
  }
  get p2 () { return this._p2; }
  set p2 (value) {
    if (typeof value !== 'number') return;
    else this._p2 = value;
  }
}

let i1 = new C(3);
console.log(i1.p2);
i1.p2 = 13;
console.log(i1.p2);
i1.p2 = i1.p3;
console.log(i1.p2);

// Vad kommer att loggas på konsolen?