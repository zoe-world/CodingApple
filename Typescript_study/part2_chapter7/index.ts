function 함수(x: unknown[]) {
  return x[0];
}

interface lengthCheck {
  length: number;
}
function 함수2<MyType extends lengthCheck>(x: MyType) {
  return x.length;
}

let a = 함수2<string>("hello"); //가능

console.log(a);

function 함수3<MyType extends string | string[]>(x: MyType) {
  console.log(x.length);
}

함수3<string>("helelel");
함수3<string[]>(["kim", "park", "lee"]);

type Person = {
  name: string;
};
function 변환기<T>(data: string): T {
  return JSON.parse(data) as T;
}
const jake = 변환기<Person>('{"name":"kim"}');

console.log(jake);
