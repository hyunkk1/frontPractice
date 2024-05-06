import { useCallback, useMemo } from "react";
import { useState } from "react";

const getAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  console.log("평균값 계산 중");
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
// getAverage라는 이름의 함수 선언. 배열의 평균값 계산
// 만약 배열이 비어있으면 0을 반환하고 그렇지 않으면 배열의 합을
// 배열의 길이로 나눈 값을 반환

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }, [number, list]);
  const avg = useMemo(() => getAverage(list), [list]);

  // Average라는 이름의 함수형 컴포넌트 선언
  // list와 number를 useState를 이용해 선언. list는 숫자리스트를 저장
  // number는 현재 입력중인 숫자를 저장. 둘다 초기값은 비어있음
  // onInsert라는 함수를 useCallback을 사용해 선언. 입력된 숫자를
  // list에 추가하고 number를 초기화. 얘는 number와 list가 변경될때만
  // 새로 생성되고 그렇지 않으면 이전에 생성된 함수 재사용
  // UseMemo를 이용해 avg 선언. list 배열의 변화가 있을때만 호출되는
  // getAverage 함수를 값으로 가지며 list가 변경되지 않는한 평균값을
  // 다시 계산하지는 않음

  return (
    <>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <p>
        <b>평균값 : </b>
        {avg}
      </p>
    </>
  );
};
// 컴포넌트의 반환값. map을 이용해 돌고 값 화면에 출력

export default Average;
