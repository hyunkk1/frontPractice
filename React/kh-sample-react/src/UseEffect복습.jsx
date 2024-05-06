import { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("랜더링이 완료 되었습니다.");
    console.log(name + " : " + nickname);
  }, []);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  // useState를 이용해 name, nickname 선언
  // useEffect를 사용해 처리. 컴포넌트가 렌더링 될 때 마다 실행됨
  // 렌더링 완료 될때마다 콘솔에 메세지와 name, nickname 값 출력
  // 두번째 값으로 빈배열을 주고, 처음 마운트될때만 실행하고 그 이후에는 실행X
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
