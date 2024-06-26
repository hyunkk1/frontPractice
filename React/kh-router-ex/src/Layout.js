import { Outlet } from "react-router-dom";
// 중첩된 라우트와 Outlet은 페이지끼리 공통적으로 보여줘야 하는
// 레이아웃이 있을때도 유용하게 사용

const Layout = () => {
  return (
    <>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header
      </header>

      <main>
        <Outlet />
      </main>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Footer
      </header>
    </>
  );
};
export default Layout;
