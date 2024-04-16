// interface Person {
//   age: number;
//   name: string;
// }
// type PersonKeys = keyof Person; //"age" | "name" 타입됩니다
// let a: PersonKeys = "age"; //가능
// // let b: PersonKeys = "ageeee"; //불가능

interface Person {
  [key: string]: number;
}
type PersonKeys = keyof Person; //string | number 타입됩니다
let a: PersonKeys = "age"; //가능
let b: PersonKeys = 3434; //가능
