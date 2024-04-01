// 다양한 타입 : Union type 유니언 타입
var 이름 = "kim";
// 함수도 타입지정
// 파라미터에 타입지정 원하면 함수(x: number)
// 리턴값에 타입지정 원하면 함수(x: number):number 지정
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var john2 = { name: "kim" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
