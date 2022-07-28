import React, { useState }  from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {dataList, setDataList, keepData} ) {

  const [sorting, setSorting] = useState(true)

  const handleSortClick = () => {
    console.log(sorting)
    if (sorting) {
      let dat = [...dataList]
      setDataList(dat.sort((a,b) => {
        return (a.location < b.location ? -1 : 1)
      }))
    } else {
      console.log(keepData)
      setDataList(keepData)
    }
    setSorting(!sorting)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
    let obj = {
      description: e.target[0].value,
      image: e.target[1].value,
      location: e.target[2].value
    }
    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    })
    .then((res) => res.json())
    .then((newItem) => setDataList([...dataList, newItem]))
  }

  return (
    <main>
      <button onClick={handleSortClick}>Sort by Location</button>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='description'/>
          <input type='text' placeholder='image'/>
          <input type='text' placeholder='location'/>
          <input type='submit' />
        </form>
      </div>
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
