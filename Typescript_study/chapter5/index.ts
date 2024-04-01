type Animal = { name: string; region: string };
type Animal2 = { name: string; type: string };

type newAnimal = Animal & Animal2;

let animal: newAnimal = {
  name: "얼룩말",
  region: "서울대공원",
  type: "초식동물",
};
console.log(animal);

type Box = {
  color?: string;
  size: number;
  readonly position: number[];
};

let box: Box = {
  size: 40,
  position: [1, 2, 3],
};
console.log(box);

type Person = {
  name: string;
  phone?: number;
  email?: string;
};

let person: Person = {
  name: "kim",
  phone: 213,
};

console.log(person);

type User = {
  name: string;
  phone?: number;
  email?: string;
};
type Age = {
  age: boolean;
};
type Nuser = User & Age;
let jojo: Nuser = {
  name: "kim",
  phone: 213,
  email: "jo123@naver.com",
  age: true,
};

console.log(jojo);
