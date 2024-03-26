// Union type 타입 2개 이상 합친 새로운 타입
let 회원: number | string | boolean = "kim";
회원 = 123;

let 회원들: (string | number)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: "123" };

let 이름: any;
이름 = 123;
이름 = [];

let 나이: unknown;
나이 = 30;
나이 = {};

// let 변수1 : string = 나이 (불가능)
// let 변수1 : string = 이름 (가능)

// 간단한 수학 계산도 타입이 맞아야 됨.
// 나이 - 1

// 유니온 타입은 둘중 하나이기 때문에 명확하게 선언되지 않아서
// 연산안됨
let 나이2: string | number;
// 나이2 + 1;

// 나이3 에 1을 할당했어도, unknown 타입이여서 오류남
let 나이3: unknown = 1;
// 나이3 - 1;

let user: string = "kim";
let age: undefined = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
