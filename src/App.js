import React, { useState } from "react";
import Refrigerator from "./components/refrigerator/refrigerator";
import Filter from "./components/filter/filter";

const App = () => {

  const [listOfFoodItems, setListOfFoodItems] = useState([])
  const [categories, setCategories] = useState([])
  const [wordToFilterBy, setWordToFilterBy] = useState('Alla')
  
  const addNewItem = (foodItem) => {
    setListOfFoodItems(listOfFoodItems => [...listOfFoodItems, foodItem])
    if(categories.includes(foodItem.productCategory)){
      return;
    }else{
      setCategories(categories => [...categories, foodItem.productCategory])
    }
  }

  const filterWord = (value) => {
    setWordToFilterBy(value)
    console.log(value)
  }

  return(
    <div className="divBody">
      <Refrigerator addNewItem={addNewItem}/>
      <Filter  categories={categories} filterWord={filterWord}/>
      <button onClick={()=>{setWordToFilterBy('Alla')}}>Alla</button>
      <ul>
        {listOfFoodItems.map((value, index) => {
          return wordToFilterBy === 'Alla' ? (
            <li key={index}>
              <h2>{value.productCategory}</h2>  
              <h1>{value.productName}</h1> 
              <h4>{value.numberOfProduct}</h4> 
              {value.expirationDate}
            </li>
          ) : wordToFilterBy === value.productCategory ? (
            <li key={index}>
              <h2>{value.productCategory}</h2>  
              <h1>{value.productName}</h1> 
              <h4>{value.numberOfProduct}</h4> 
              {value.expirationDate}
            </li>
          ) : null
        })}
      </ul>
    </div>
  )
}

export default App;