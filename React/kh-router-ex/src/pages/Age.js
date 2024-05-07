import { useParams } from "react-router-dom";

const Age = () => {
  const { age } = useParams();
  return (
    <>
      <h1>전달 받은 나이는 {age}입니다</h1>
    </>
  );
};

export default Age;
