import React, { useState } from "react";
import Search from "./Search";

function Header( {dataList, setDataList} ) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search dataList={dataList} setDataList={setDataList} />
    </header>
  );
}

export default Header;
