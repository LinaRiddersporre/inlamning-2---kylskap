import Filter from "../filter/filter"

const Refrigerator = (props) => {
    const foodItems = {
        productName: '',
        numberOfProduct: 0,
        productCategory: '',
        expirationDate: 0
    }
    
    const productCategory = [{
        productCategory: ''
    }]

    const submitForm = (e) => {
        e.preventDefault()
        console.log(e.target)
        foodItems.productName = e.target.children[0].value
        foodItems.numberOfProduct = e.target.children[1].value
        foodItems.productCategory = e.target.children[2].value
        productCategory.productCategory = e.target.children[2].value
        foodItems.expirationDate = e.target.children[3].value
        console.log(productCategory)
        props.addNewItem(foodItems)
    }

    return(
        <div id="div">
            <form onSubmit={submitForm}>
                <input type='text' placeholder='Produktnamn'></input>
                <input type='number' placeholder="Antal artiklar"></input>
                <input type='text' placeholder="Produktkategori"></input>
                <input type='date'></input>
                <input type='submit'></input>
            </form>
            {console.log('ref:', productCategory)}
            <Filter productCategory={productCategory}/>
        </div>
    )
}

export default Refrigerator;