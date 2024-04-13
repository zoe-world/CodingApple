"use strict";
var 변수1 = [10];
var 변수2 = [10, 20];
var 변수3 = [10, 20, 10];
console.log(변수1, 변수2);
var food = ["샌드위치", 7900, false];
console.log(food);
var arr = ["동서녹차", 4000, true, false, true, true, false, true];
console.log(arr);
function 함수() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
함수("이조은", 30, "샌드위치 아티스트", 33);
// 숙제4
function filtering() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var text = [];
    var num = [];
    var total = [text, num];
    // 1. 숫자와 문자를 확인해야됨
    x.forEach(function (v) {
        if (typeof v === "string") {
            text.push(v);
        }
        else {
            num.push(v);
        }
    });
    return total;
}
filtering("b", 5, 6, 8, "a");
