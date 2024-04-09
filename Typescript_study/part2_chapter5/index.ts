class User {
  static skill = "js";
  intro = User.skill + "전문가입니다";
}

var 철수 = new User();
console.log(철수);

User.skill = "python";
var 민수 = new User();
console.log(민수);

class Adduser {
  private static x = 10;
  public static y = 20;

  static addOne(z: number) {
    Adduser.x += z;
  }
  static printX() {
    console.log(Adduser.x);
  }
}
Adduser.addOne(30);
Adduser.addOne(10);
Adduser.printX();

class Square {
  constructor(public 가로: number, public 세로: number, public 배경: string) {}
  draw() {
    let rad = Math.random();
    let box = `
        <div style='position:relative;top:${rad * 300}px;left:${
      rad * 300
    };width:${rad * this.가로}px; height:${rad * this.세로}px; background:${
      this.배경
    }'></div>
    `;
    document.body.insertAdjacentHTML("beforeend", box);
  }
}

let 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw();
