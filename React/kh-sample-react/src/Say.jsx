import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState(""); //상태관리
  const onClickEnter = () => setMessage("안녕하세요");
  const onclickLeave = () => setMessage("안녕히가세요");
  const [val, setColor] = useState("black"); //상태관리

  console.log("Say 리렌더링!!!");

  const obj = {
    color: val,
  };

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onclickLeave}>퇴장</button>
      <h1 style={obj}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </>
  );
};
export default Say;
