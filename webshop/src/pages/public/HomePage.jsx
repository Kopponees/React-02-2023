import React, { useState } from 'react'
import productsFromFile from '../../data/products.json';
// import cartFile from '../../data/cart.json';
import categoriesFromFile from '../../data/categories.json';
import Button from '@mui/material/Button';

function HomePage() {
const [products, setProducts] = useState(productsFromFile);

const addToCart = (clickedProduct) => {
  const cartLS =JSON.parse(localStorage.getItem("cart")) || []; //JSON.parse võtab jutumärgid maha
  cartLS.push(clickedProduct);//ennem oli cartFile.push(clickedProduct)
  localStorage.setItem("cart", JSON.stringify(cartLS));//JSON.stringify paneb jutumärgid tagasi peale.
//localStorage.getItem("VÕTI"); -võta väärtus localstorage-st
//localStorage.setItem("VÕTI", "UUS_VÄÄRTUS"); pane väärtus localstoragesse

//1. võtame kogu vana ostukorvi seisu localstoragesse
//2. tuleb võtta jutumärgid maha(siiamaani-keel, telefon, email, aadress,veebilehe_varv)
//3. lisame ostukorvi ühe toote juurde
//4. panna jutumärgis tagasi peale
//5. paneme kogu ostukorvi sisu tagasi
}

const filterByCategory = (categoryClicked) => {
  const result = productsFromFile.filter(element => element.category === categoryClicked);
  setProducts(result);
}


  return (
    <div>
      {/* <button onClick={() => filterByCategory("belts")}>belts</button>
      <button onClick={() => filterByCategory("tent")}>tents</button>
      <button onClick={() => filterByCategory("camping")}>camping</button>
      <button onClick={() => filterByCategory("jeans")}>jeans</button> */}
      {categoriesFromFile.map(element => <button key={element} onClick={() => filterByCategory(element)}>{element}</button>)}
      <div>{products.length} pcs</div>
      {products.map(element => 
       <div key={element.id}>
        <img src={element.image} alt="" />
        <div>{element.id}</div>
        <div>{element.name}</div>
        <div>{element.image}</div>
        <div>{element.price}</div>
        <div>{element.category}</div>
        <div>{element.description}</div>
        <div>{element.active}</div>
        <Button variant="contained" onClick={() =>addToCart(element)}>Add to cart</Button>
       </div>
       )}
    </div>
  )
}

export default HomePage