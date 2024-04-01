// 타입은 변수에 담아쓸 수 있음 타입명 시작은 대문자
type Name = string | number;

// 다양한 타입 : Union type 유니언 타입
let 이름: string | number = "kim";

// 함수도 타입지정
// 파라미터에 타입지정 원하면 함수(x: number)
// 리턴값에 타입지정 원하면 함수(x: number):number 지정
function 함수(x: number): number {
  return x * 2;
}

// array 에 쓸 수 있은 tuple 튜블타입
// 첫번째, 두번째 타입 지정
type Member = [number, boolean];
let john: Member = [123, true];

type Member2 = {
  // object에 타입지정해야할 속성이 너무 많으면
  [key: string]: string;
};

let john2: Member2 = { name: "kim" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
