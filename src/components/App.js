import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [searchText, setSearchText] = useState('')
  const [dataList, setDataList] = useState([])

  return (
    <div className="app">
      <Header dataList={dataList} setDataList={setDataList} />
      <ListingsContainer dataList={dataList} setDataList={setDataList} />
    </div>
  );
}

export default App;
