type Member = {
  name: string;
  age: number;
  plusOne(x: number): number;
  changeName: () => void;
};
let 회원정보: Member = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {},
};
회원정보.plusOne(1);
회원정보.changeName();

type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};
function removeDash(x: string): number {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
}

type 함수타입 = (a: string) => string;
type 함수타입2 = (a: string) => number;

function 만들함수(x: string, y: 함수타입, z: 함수타입2) {
  let result = y(x);
  let result2 = z(result);
  console.log(result2);
}
만들함수("010-1234-1235", cutZero, removeDash);
