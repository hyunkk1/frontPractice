import "./App.css";
import ReducerCnt from "./UseReducer";

// import UserList from "./UserList";
// JSX란? JavaScript에 XML 추가 확장한 문법
// html 태그 사용 시 반드시 닫힘 태그가 존재해야 함
// 컴포넌트가 반환 될때 태그는 한개 이어야 함
// 자바스크립트 코드를 중괄호를 사용해 바인딩 할 수 있음
// 조건부 연산자 : {}내에서 조건부 연산자 사용 가능
// 조건부 렌더링 : && 연산자의 특징을 활용해서 조건에 따라 화면 랜더링

// import Greeting from "./Greeting";
// import Welcome from "./Welcome";
// import Section from "./Section";
// import MyComponent from "./MyComponent";
// import imageSrc from "./기아1등.png";
// import Say from ".Say";
// import Clock from "./Clock";
// import EventPractice from "./EventPractice";
// import FruitSelect from "./FruitSelect";
// import Greeting1 from "./그리팅연습";
// import Table1 from "./테이블연습";
// import TodoList from "./TodoList";
// import CreateRef from "./Ref";
// import HookCnt from "./Hokks1";
// import NameCard from "./연습문제1";
// import ExComponent from "./UserRef2";
// import Info from "./UseEffect.jsx";import reducer from "./UseReducer";
import Average from "./UseMemo";

// 컴포넌트의 합성
function App() {
  return (
    <>
      <Average />
    </>
  );
}

export default App; // export로 내보내기를 하지 않으면 못읽음. 쌍방으로 improt, export 걸어줘야함
