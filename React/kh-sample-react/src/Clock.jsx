import { useEffect, useState } from "react";

const Clock = () => {
  const [data, setData] = useState(new Date());

  useEffect(() => {
    //정해진 간격에 맞춰 콜백함수 호출
    const intervalID = setInterval(() => setData(new Date()), 1000);
    return () => clearInterval(intervalID);
  }, {});

  //정해진 간격에 맞춰 콜백함수 호출
  // setInterval(()=> setData(new Data),1000)

  return (
    <>
      <h1 현재 시간표시></h1>
      <h2>현재 시간은{data.toLocaleTimeString()}</h2>
    </>
  );
};

export default Clock;
