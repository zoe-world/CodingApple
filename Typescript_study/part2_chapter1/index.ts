// let [변수1, 변수2] = ["ㅎㅇ", 100];
// console.log(변수1, 변수2);

// let { student, age } = { student: true, age: 10 };
// console.log(변수1, 변수2, student, age);

let 오브젝트 = { student: true, age: 10 };

function 함수({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}

함수(오브젝트);

function func(...rest: []) {
  console.log(rest);
  console.log(func.length);
}
func(1, 2, 3);
func.length; // 0

function func1(arg1: [], arg2: [], ...args: []) {
  // return [arg1, arg2, args];
  console.log(arg1, arg2, args);
  console.log(func1.length);
}
func1(1, 2, 3, 4, 5);

let person = { student: true, age: 20 };

function 함수2(a: boolean, b: number) {
  console.log(a, b);
}
함수(person.student, person.age);

let 날짜 = new Date();
if (날짜 instanceof Date) {
  console.log(Date);
}

function maxNum(...num: number[]): number {
  let result = 0;
  num.forEach((v) => {
    console.log(v);
    if (result < v) {
      result = v;
    }
  });
  return result;
}

console.log(maxNum(3, 2, 6));
