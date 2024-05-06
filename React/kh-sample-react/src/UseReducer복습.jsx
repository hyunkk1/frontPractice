import { useReducer } from "react";

function reducer(state, action) {
  // 액션 타입에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
// reducer 함수 정의후 이전상태의 state와 action을 받아 새상태 반환.
// 타입에 따라 다른 작업을 수행하고 새로운 상태 반환
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 }); // 상태값이 객체
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
    </div>
  );
};
// Counter 컴포넌트 선언. useReducer를 사용해 상태관리.
// 초기상태 객체인 value: 0을 줘서 초기화
// html.
export default Counter;
