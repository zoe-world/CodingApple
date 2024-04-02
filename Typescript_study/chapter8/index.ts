let 제목 = document.querySelector("#title");
// 1. 1번째 방법
if (제목 != null) {
  제목.innerHTML = "반가워요";
}
if (제목 instanceof Element) {
  제목.innerHTML = "반가워요";
}

let 제목2 = document.querySelector("#title") as Element;
제목2.innerHTML = "반가워요!";

let 제목3 = document.querySelector("#title");
if (제목3?.innerHTML != undefined) {
  제목3.innerHTML = "반가워요~";
}

let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}

let 버튼2 = document.querySelector("#button");
버튼2?.addEventListener("click", function () {});

let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "new.jpg";
}

let 네이버 = document.querySelectorAll(".naver");

네이버.forEach((v) => {
  if (v instanceof HTMLAnchorElement) {
    v.href = "https://kakao.com";
  }
});
