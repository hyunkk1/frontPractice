import { useParams } from "react-router-dom";
// useParams : 리액트 라우터에서 URL 파라미터 값을 가져오기 위해 쓰는 훅

const data = {
  frontend: {
    name: "김",
    description: "리액트 개발",
  },
  backend: {
    name: "이",
    description: "스프링부트 개발",
  },
  dba: {
    name: "박",
    description: "DBA 개발자",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.name]; // 키를 넣으면 값 나옴 [키]
  return (
    <>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필</p>
      )}
    </>
  );
};
export default Profile;
