import React from "react";

function Search({ dataList, setDataList } ) {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(e.target[0].value)
    // setSearchText(e.target[0].value)
    setDataList(dataList.filter((item) => {
      return (item.description.includes(e.target[0].value) ? item : null)
    }))
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // onChange={(e) => console.log(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
