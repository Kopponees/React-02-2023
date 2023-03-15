import React, {useState} from 'react';
import cartFile from '../../data/cart.json';
import Button from '@mui/material/Button';

function Cart() {
const [cart, setCart] = useState(cartFile);



const add = (clickedProduct) => {
  cartFile.push(clickedProduct);
  setCart(cartFile.slice());
}

const deleteProduct = (index) => {
  cartFile.splice(index,1);
  setCart(cartFile.slice());
}

const empty = () => {
  cartFile = [];
  setCart([]);
}
 const calculatetotalValue = () => {
  let totalValue = 0;
  cartFile.forEach(oneProduct => totalValue= totalValue + oneProduct.price);
return totalValue;
}

  return (
    <div>
      {cart.length > 0 && <Button variant="outlined" onClick={empty}>Empty</Button>}
      {cart.length === 0 && <div>Cart is empty!</div>}
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