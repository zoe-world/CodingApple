var 제목 = document.querySelector("#title");
// 1. 1번째 방법
if (제목 != null) {
    제목.innerHTML = "반가워요";
}
if (제목 instanceof Element) {
    제목.innerHTML = "반가워요";
}
var 제목2 = document.querySelector("#title");
제목2.innerHTML = "반가워요!";
var 제목3 = document.querySelector("#title");
if ((제목3 === null || 제목3 === void 0 ? void 0 : 제목3.innerHTML) != undefined) {
    제목3.innerHTML = "반가워요~";
}
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
var 버튼2 = document.querySelector("#button");
버튼2 === null || 버튼2 === void 0 ? void 0 : 버튼2.addEventListener("click", function () { });
var 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
}
var 네이버 = document.querySelectorAll(".naver");
네이버.forEach(function (v) {
    if (v instanceof HTMLAnchorElement) {
        v.href = "https://kakao.com";
    }
});
