import { useState } from "react";
import FruitSelect from "./FruitSelect";

const EventPractice = () => {
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const onChangeUserName = (val) => setUserName(val);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(userName + " : " + message);
    setUserName("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };

  const age = 20;

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => onChangeUserName(e.target.value)}
      />
      <input
        type="text"
        value={message}
        onChange={onChangeMessage}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </>
  );
};
export default EventPractice;
