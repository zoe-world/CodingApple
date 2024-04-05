// let [변수1, 변수2] = ["ㅎㅇ", 100];
// console.log(변수1, 변수2);
// let { student, age } = { student: true, age: 10 };
// console.log(변수1, 변수2, student, age);
var 오브젝트 = { student: true, age: 10 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수(오브젝트);
function func() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    console.log(rest);
    console.log(func.length);
}
func(1, 2, 3);
func.length; // 0
function func1(arg1, arg2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    // return [arg1, arg2, args];
    console.log(arg1, arg2, args);
    console.log(func1.length);
}
func1(1, 2, 3, 4, 5);
var person = { student: true, age: 20 };
function 함수2(a, b) {
    console.log(a, b);
}
함수(person.student, person.age);
var 날짜 = new Date();
if (날짜 instanceof Date) {
    console.log(Date);
}
function maxNum() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var result = 0;
    num.forEach(function (v) {
        console.log(v);
        if (result < v) {
            result = v;
        }
    });
    return result;
}
console.log(maxNum(3, 2, 6));
