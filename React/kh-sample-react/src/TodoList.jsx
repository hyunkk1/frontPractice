import { useEffect, useState } from "react";
import "./App.css";

const TodoList = () => {
  const [names, setName] = useState(() => {
    // Try to retrieve names from localStorage, or use the initial array if not present
    const storedNames = localStorage.getItem("names");
    return storedNames
      ? JSON.parse(storedNames)
      : [
          { id: 1, text: "HTML 연습" },
          { id: 2, text: "CSS 복습" },
          { id: 3, text: "자바스트립트 이해" },
          { id: 4, text: "리액트프로젝트" },
        ];
  });
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  // 내용 변경 시 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    // const nextNames = names.concat({
    //   // 불변성의 원칙을 유지하기 위해 새로운 배열 생성
    //   id: nextId,
    //   text: inputText,
    // });
    const nextNames = [...names, { id: nextId, text: inputText }];
    setNextId(nextId + 1);
    setName(nextNames); // 요렇게 넣으면 names에 대한 주소가 변경되므로 렌더링 조건이 됨
    setInputText(""); // input창을 초기화해줌
  };
  const onKeyPress = (e) => {
    // 엔터키가 입력되도 onClick함수를 호출 함
    if (e.key === "Enter") onClick(); // 함수 호출
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setName(nextNames);
  };

  return (
    <>
      <input value={inputText} onChange={onChange} onKeyDown={onKeyPress} />
      <button onClick={onClick}>추가</button>
      <ul>
        {names &&
          names.map((name) => (
            <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
              {name.text}
            </li>
          ))}
      </ul>
    </>
  );
};
export default TodoList;
