import { useEffect, useState } from "react";
import "./App.css";

const Table = () => {
  const data = [
    { id: 1, name: "김", age: 21 },
    { id: 2, name: "이", age: 22 },
    { id: 3, name: "박", age: 23 },
  ];

  const [mapData, setMapData] = useState("");

  useEffect(() => {
    // 서버 통신 구간
    setMapData(data);
  }, []);

  const handleTableRowClick = (item) => {
    console.log(item);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {mapData &&
          mapData.map((item) => (
            // 즉시 실행되지 않고 onClick 이벤트가 발생 했을 때 호출하기 위함, 화살표 함수는 그 자체가 함수이기 때문
            <tr key={item.id} onClick={() => handleTableRowClick(item)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
