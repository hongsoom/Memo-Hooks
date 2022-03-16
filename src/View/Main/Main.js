import React, { useState } from "react";
import AddMemo from "../Add/AddMemo";
import "./Main.scss";

const Main = () => {
  const [isClicked, setIsCilcked] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 버튼 클릭시 state 변경
  const onClick = () => {
    setIsCilcked(!isClicked); // false -> true
  };

  // 자식컴포넌트에서 데이터 받기
  // 전달받은 파라미터로 값이 바뀜
  const saveMemo = (childTitle, childContent) => {
    setTitle(childTitle);
    setContent(childContent);
  };

  /*const componentDidUpdate = () => {
    console.log("isClicked", isClicked);
    console.log("content", content);
  };*/

  return (
    <>
      {/**operator : true이면 AddMemo 컴포넌트를 띄우고 props로 onClick,title,saveMemo를 자식컴포넌트에 보냄
       * onClick props는 onClick함수, title Props는 데이터, saveMemo props는 saveMemo함수**/}
      {isClicked ? (
        <AddMemo onClick={onClick} header="Memo" saveMemo={saveMemo} />
      ) : null}
      <div className="Main">
        <div className="MainForm">
          <div className="MainTitle">Memo</div>
          <div className="List">
            <p>{title}</p>
            <span>{content}</span>
          </div>
          <div className="MainBottom">
            <button type="button" className="AddBtn" onClick={onClick}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
