import React, {useState} from 'react';
// import cartFile from '../../data/cart.json';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

function Cart() {
const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);



const add = (clickedProduct) => {
  cart.push(clickedProduct);
  setCart(cart.slice());//uuendab HTML-i
  localStorage.setItem("cart", JSON.stringify(cart));// uuendab localstorage-t
}

const deleteProduct = (index) => {
  cart.splice(index,1);
  setCart(cart.slice());
  localStorage.setItem("cart", JSON.stringify(cart));
}

const empty = () => {
  setCart([]);
  localStorage.setItem("cart", JSON.stringify([]));
  //localStorage.setitem("cart", "[]");  niis saab ka
}
 const calculatetotalValue = () => {
  let totalValue = 0;
  cart.forEach(oneProduct => totalValue= totalValue + oneProduct.price);
return totalValue.toFixed(2);
}

  return (
    <div>
      {cart.length > 0 && <Button variant="outlined" onClick={empty}>Empty</Button>}
      {cart.length === 0 && <div>Cart is empty! <Link to="/">Add products</Link></div>}
      {cart.length > 0 && <div> Total of { cart.length} products in cart!</div>}
      
       {cart.map((element, index) =>
       <div key={index}>
        <img src={element.image} alt="" />
        <div>{element.name}</div>
        <div>{element.image}</div>
        <div>{element.price} €</div>
        <button onClick={() => add(element)}>+</button>
        <button onClick= {() => deleteProduct(index)}>X</button>
     </div>
       )}
        {cart.length > 0 && <div> Total Value: {calculatetotalValue()} €</div>}
    </div>
  )
}

export default Cart