import React, { useState } from "react";

const NameCardMain = ({ nameCard }) => {
  return (
    <>
      <h2>명함 정보</h2>
      <p>이름 : {nameCard.name}</p>
      <p>직책 : {nameCard.position}</p>
      <p>회사 : {nameCard.company}</p>
      <p>주소 : {nameCard.addr}</p>
      <p>메일 : {nameCard.email}</p>
      <p>전화 : {nameCard.phone}</p>
    </>
  );
};

const NameCard = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    position: "",
    company: "",
    addr: "",
    email: "",
    phone: "",
  });
  const [submit, setSubmit] = useState(false);
  const onChange = (key, value) => {
    setUserInput({ ...userInput, [key]: value });
  };
  const onSubmit = () => {
    setSubmit(true);
  };
  return (
    <>
      <h1>회원 정보 가입</h1>
      <input
        type="text"
        placeholder="이름 입력"
        value={userInput.name}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="직책 입력"
        value={userInput.position}
        onChange={(e) => onChange("position", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="회사 입력"
        value={userInput.company}
        onChange={(e) => onChange("company", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="주소 입력"
        value={userInput.addr}
        onChange={(e) => onChange("addr", e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="메일 입력"
        value={userInput.email}
        onChange={(e) => onChange("email", e.target.value)}
      />
      <br />
      <input
        type="tel"
        placeholder="폰 입력"
        value={userInput.phone}
        onChange={(e) => onChange("phone", e.target.value)}
      />
      <br />
      <button onClick={onSubmit}>제출</button>
      {submit && <NameCardMain nameCard={userInput} />}
    </>
  );
};
export default NameCard;
