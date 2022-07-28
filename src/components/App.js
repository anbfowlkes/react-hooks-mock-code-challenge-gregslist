import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [dataList, setDataList] = useState([])
  const [keepData, setKeepData] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((res) => res.json())
    .then((data) => {
      setDataList(data)
      setKeepData([...data])
    })
  }, [])

  return (
    <div className="app">
      <Header dataList={dataList} setDataList={setDataList} keepData={keepData} setKeepData={setKeepData} />
      <ListingsContainer dataList={dataList} setDataList={setDataList} keepData={keepData} />
    </div>
  );
}

export default App;
