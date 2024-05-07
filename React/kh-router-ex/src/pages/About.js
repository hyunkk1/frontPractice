import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>여기는 소개페이지</h1>
      <p>리액트 라우터 사용하기</p>
      <Link to="/">홈으로 이동</Link>
    </>
  );
};
export default About;
