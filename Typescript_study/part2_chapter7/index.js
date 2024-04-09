"use strict";
function 함수(x) {
    return x[0];
}
function 함수2(x) {
    return x.length;
}
var a = 함수2("hello"); //가능
console.log(a);
function 함수3(x) {
    console.log(x.length);
}
함수3("helelel");
함수3(["kim", "park", "lee"]);
function 변환기(data) {
    return JSON.parse(data);
}
var jake = 변환기('{"name":"kim"}');
console.log(jake);
