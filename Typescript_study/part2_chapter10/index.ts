type Num = [number, number?, number?];
let 변수1: Num = [10];
let 변수2: Num = [10, 20];
let 변수3: Num = [10, 20, 10];

console.log(변수1, 변수2);

type Food = [string, number, boolean];
let food: Food = ["샌드위치", 7900, false];
console.log(food);

type Foods = [string, number, ...boolean[]];
let arr: Foods = ["동서녹차", 4000, true, false, true, true, false, true];
console.log(arr);

function 함수(...x: [string, number, ...(string | number)[]]) {
  console.log(x);
}
함수("이조은", 30, "샌드위치 아티스트", 33);

// 숙제4
function filtering(...x: (string | number)[]) {
  let text: string[] = [];
  let num: number[] = [];
  let total = [text, num];
  // 1. 숫자와 문자를 확인해야됨
  x.forEach((v) => {
    if (typeof v === "string") {
      text.push(v);
    } else {
      num.push(v);
    }
  });
  return total;
}
filtering("b", 5, 6, 8, "a");
