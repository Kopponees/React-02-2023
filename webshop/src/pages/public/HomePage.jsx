import React, { useState } from 'react'
import productsFromFile from '../../data/products.json';
import cartFile from '../../data/cart.json';
import Button from '@mui/material/Button';

function HomePage() {
const [products] = useState(productsFromFile);

const addToCart = (clickedProduct) => {
cartFile.push(clickedProduct);
}


  return (
    <div>
      {products.map(element => 
       <div>
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