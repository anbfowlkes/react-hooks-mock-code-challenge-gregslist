import React, { useState }  from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {dataList, setDataList, keepData} ) {

  const [sorting, setSorting] = useState(true)

  const handleSortClick = () => {
    console.log(sorting)
    if (sorting) {
      // let dat = [...dataList]
      setDataList(dataList.sort((a,b) => {
        return (a.location < b.location ? -1 : 1)
      }))
    } else {
      console.log(keepData)
      setDataList(keepData)
    }
    setSorting(!sorting)
  }

  return (
    <main>
      <button onClick={handleSortClick}>Sort by Location</button>
      <ul className="cards">
        {dataList.map((item) => {
          return (
            <ListingCard 
            description={item.description}
            image={item.image}
            location={item.location}
            key={item.id}
            id={item.id}
            dataList={dataList}
            setDataList={setDataList}
             />
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
