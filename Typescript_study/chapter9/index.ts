class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }
  tax(): number {
    return this.price * 0.1;
  }
}
let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());

class Word {
  num;
  str;
  constructor(...param: (number | string)[]) {
    let 숫자들: number[] = [];
    let 문자들: string[] = [];
    param.forEach((v) => {
      if (typeof v === "string") {
        문자들.push(v);
      } else {
        숫자들.push(v);
      }
      console.log();
    });
    this.num = 숫자들;
    this.str = 문자들;
  
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num);
console.log(obj.str);
