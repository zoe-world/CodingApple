// (숙제1) 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
// 모르는 부분은 구글검색해도 봐드림
function cleaning(x) {
    var 클리닝완료 = [];
    x.forEach(function (y) {
        if (typeof y === "string") {
            클리닝완료.push(parseFloat(y));
        }
        else {
            클리닝완료.push(y);
        }
    });
    return 클리닝완료;
}
// console.log(cleaning([10903, "9973"]));
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
function lastSubject(x) {
    if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else if (typeof x.subject === "string") {
        return x.subject;
    }
    else {
        return "없음";
    }
}
console.log(lastSubject({ subject: ["english", "art"] }));
