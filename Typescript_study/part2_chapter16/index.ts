type Age<T> = T extends [string, ...any] ? T[0] : unknown;

let age1: Age<[string, number]>;
let age2: Age<[boolean, number]>;

type 타입뽑기<T> = T extends (x: infer R) => any ? R : any;
type a = 타입뽑기<(x: number) => void>; //이러면 number가 이 자리에 남음
