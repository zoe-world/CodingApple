import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

/*eslint-disable*/
function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState(0);
  function 정렬() {
    let copy = [...글제목];
    copy[0] = "여자코트 추천";
    copy.sort((a, b) => (a < b ? -1 : a == b ? 0 : 1));
    글제목변경(copy);
  }
  return (
    <div cl assName="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        {/* 버튼 클릭시 가나다순 정렬 */}
        <button
          onClick={() => {
            정렬();
          }}
        >
          글수정
        </button>
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            ❤️‍🔥
          </span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
