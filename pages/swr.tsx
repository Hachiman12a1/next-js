import { StudentDetail } from "@/components/swr";
import * as React from "react";

export default function SWRPage() {
  const [detailList, setDetailList] = React.useState([1, 1, 1]);

  const handleOnClick = () => {
    setDetailList((prevList) => [...prevList, 1]);
  };

  return (
    <div>
      <h1>SWR Playground</h1>
      <button onClick={handleOnClick}>Add detail</button>
      <ul>
        {detailList.map((x, index) => (
          <li key={index}>
            <StudentDetail studentId="lea2aa9l7x3a5v0" />
          </li>
        ))}
      </ul>
    </div>
  );
}
