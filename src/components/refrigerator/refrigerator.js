import Filter from "../filter/filter"

const Refrigerator = (props) => {
    const foodItem = {
        productName: '',
        numberOfProduct: 0,
        productCategory: '',
        expirationDate: 0
    }

    const submitForm = (e) => {
        e.preventDefault()
        foodItem.productName = e.target.children[0].value
        foodItem.numberOfProduct = e.target.children[1].value
        foodItem.productCategory = e.target.children[2].value
        foodItem.expirationDate = e.target.children[3].value
        props.addNewItem(foodItem)
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
        </div>
    )
}

export default Refrigerator;