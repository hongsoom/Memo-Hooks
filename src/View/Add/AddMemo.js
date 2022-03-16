import React, { useState } from "react";
import "./AddMemo.scss";

// props 값은 컴포넌트 함수의 파라미터로 받아와서 사용
const AddMemo = (props) => {
  const { onClick, header, saveMemo } = props; // 비구조화 할당 props

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 이벤트 객체 event의 target은 이벤트가 발생한 DOM인 input DOM을 가르키고 이 DOM의 value 값
  // 즉, event.target.value를 조회하면 현재 input에 입력한 값을 알 수 있음.
  const handleInputTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleInputContent = (event) => {
    setContent(event.target.value);
  };

  /* componentDidUpdate() {
    console.log("title", this.state.title);
    console.log("content", this.state.content);
  }*/

  return (
    <div className="Memo">
      <div className="MemoBackground" />
      <div className="MemoContent">
        <div className="MemoTitle">
          <div className="Title-info">{header}</div>
        </div>
        <div className="MemoInfo">
          <input
            id="title"
            type="text"
            placeholder="Title"
            onChange={handleInputTitle}
          ></input>
          <textarea
            className="content"
            type="text"
            name="content"
            placeholder="content"
            onChange={handleInputContent}
          />
        </div>
        <div className="MemoFoot">
          <button
            className="button1"
            type="button"
            onClick={() => {
              saveMemo(title, content);
              {
                onClick();
              }
            }}
          >
            Save
          </button>
          <button type="button" className="button2" onClick={onClick}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMemo;
