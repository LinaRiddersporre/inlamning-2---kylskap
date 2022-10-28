import React, { useState } from "react";
import Refrigerator from "./components/refrigerator/refrigerator";
import Filter from "./components/filter/filter";

const App = () => {
  

  const [list, setList] = useState([])
  
  const addNewItem = (foodItems) => {
    setList(list => [...list, foodItems])
    console.log(list)
  }

  // const renderItems = () => {

  // }

    return(
      <div className="divBody">
        <Refrigerator addNewItem={addNewItem}/>
        <Filter/>
        <ul>
          {list.map((value, index) => {
            return(
              <li key={index}>
                <h2>{value.productCategory}</h2>  
                <h1>{value.productName}</h1> 
                <h4>{value.numberOfProduct}</h4> 
                {value.expirationDate}
              </li>
            )
          })}
        </ul>
      </div>
    )
  
}

export default App;