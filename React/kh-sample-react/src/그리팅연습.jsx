import React, { useState } from "react";

const Greeting1 = () => {
  // useState 사용하여 사용자의 이름관리
  const [name, setName] = useState("");

  // input 요소의 변경에 따라 setName을 통해 name 상태를 업데이트
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>리액트연습이에요</h1>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="이름 입력"
      />

      {name && <p>안녕하세요, {name}님!</p>}
    </div>
  );
};

export default Greeting1;
