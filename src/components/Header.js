import React from "react";
import Search from "./Search";

function Header( {dataList, setDataList, keepData} ) {

  
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search dataList={dataList} setDataList={setDataList} keepData={keepData} />
    </header>
  );
}

export default Header;
