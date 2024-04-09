"use strict";
var User = /** @class */ (function () {
    function User() {
        this.intro = User.skill + "전문가입니다";
    }
    User.skill = "js";
    return User;
}());
var 철수 = new User();
console.log(철수);
User.skill = "python";
var 민수 = new User();
console.log(민수);
var Adduser = /** @class */ (function () {
    function Adduser() {
    }
    Adduser.addOne = function (z) {
        Adduser.x += z;
    };
    Adduser.printX = function () {
        console.log(Adduser.x);
    };
    Adduser.x = 10;
    Adduser.y = 20;
    return Adduser;
}());
Adduser.addOne(30);
Adduser.addOne(10);
Adduser.printX();
var Square = /** @class */ (function () {
    function Square(가로, 세로, 배경) {
        this.가로 = 가로;
        this.세로 = 세로;
        this.배경 = 배경;
    }
    Square.prototype.draw = function () {
        var rad = Math.random();
        var box = "\n        <div style='position:relative;top:".concat(rad * 300, "px;left:").concat(rad * 300, ";width:").concat(rad * this.가로, "px; height:").concat(rad * this.세로, "px; background:").concat(this.배경, "'></div>\n    ");
        document.body.insertAdjacentHTML("beforeend", box);
    };
    return Square;
}());
var 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw();
