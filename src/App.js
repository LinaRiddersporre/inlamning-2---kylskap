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
      <div className="showAll">
        <button onClick={()=>{setWordToFilterBy('Alla')}}>Alla</button>
      </div>
      
      <Filter  categories={categories} filterWord={filterWord}/>
      <ul>
        {listOfFoodItems.map((value, index) => {
          return wordToFilterBy === 'Alla' ? (
            <li key={index} className='productCard'>
              <h2>{value.productCategory}</h2>  
              <h2>{value.productName}</h2> 
              <h2>{value.numberOfProduct}</h2> 
              <p>{value.expirationDate}</p>
            </li>
          ) : wordToFilterBy === value.productCategory ? (
            <li key={index} className='productCard'>
              <h2>{value.productCategory}</h2>  
              <h2>{value.productName}</h2> 
              <h2>{value.numberOfProduct}</h2> 
              <p>{value.expirationDate}</p>
            </li>
          ) : null
        })}
      </ul>
    </div>
  )
}

export default App;