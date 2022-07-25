import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {setSearchText, searchText, dataList, setDataList} ) {

  // const [dataList, setDataList] = useState([])

  const handleDeleteFunction = (id) => {
    setDataList(dataList.filter((item) => {
      return (item.id === id ? null : item)
    }))
  }

  const searchTextFunction = () => {
    setDataList(dataList.filter((item) => {

    }))
    
  }

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((res) => {return res.json()})
    .then((data) => {setDataList(data)})
  }, [])
  return (
    <main>
      <ul className="cards">
        {dataList.map((item) => 
         {
          return <ListingCard handleDeleteFunction={handleDeleteFunction} image={item.image} location={item.location} description={item.description} id={item.id} key={item.id} />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
