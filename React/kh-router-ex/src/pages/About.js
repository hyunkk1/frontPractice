import { useLocation } from "react-router-dom";
// 쿼리스트링은 URL 파라미터와 달리 별도 설정이 필요 없음

const About = () => {
  const location = useLocation();
  return (
    <>
      <h1>여기는 소개페이지</h1>
      <p>리액트 라우터 사용하기</p>
      <p>쿼리스트링 : {location.search}</p>
    </>
  );
};
export default About;
