import React from "react";

function Search( {dataList, setDataList, keepData} ) {
  const handleSubmit = (e) => {
    e.preventDefault()
    let searchVal = e.target[0].value
    setDataList(keepData.filter((item) => {
      return (item.description.toLowerCase().includes(searchVal.toLowerCase()) ? 1 : 0)
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
