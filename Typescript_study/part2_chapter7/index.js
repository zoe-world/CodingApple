"use strict";
// function 함수(x: unknown[]) {
//   return x[0];
// }
function 함수4(x) {
    return x.length;
}
// let d = 함수4<string>("hllo"); //가능
var b = 함수4("hllo"); //에러남
console.log(b);
