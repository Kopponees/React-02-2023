import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { CartSumContext } from '../../store/CartSumContext';
import ParcelMachine from '../../components/cart/ParcelMachine';
import Payment from '../../components/cart/Payment';

function Ostukorv() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const { setCartSum } = useContext(CartSumContext);

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0) {
      deleteProduct(index);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(calculatetotalValue());

  }
  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(calculatetotalValue());
  }

  const deleteProduct = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(calculatetotalValue());
  }

  const empty = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    setCartSum("0.00");
  }
  const calculatetotalValue = () => {
    let totalValue = 0;
    cart.forEach(oneProduct => totalValue = totalValue + oneProduct.product.price * oneProduct.quantity);
    return totalValue.toFixed(2);
  }
  
  return (
    <div>
      <div className="cart-top">
        {cart.length > 0 && <Button variant="outlined" onClick={empty}>Empty</Button>}
        {cart.length === 0 && <div>Cart is empty! <Link to="/">Add products</Link></div>}
        {cart.length > 0 && <div> Total of {cart.length} products in cart!</div>}
      </div>

      {cart.map((element, index) =>
      <div className="product-wrapper">
        <div className="product" key={index}>
          <img className="image" src={element.product.image} alt="" />
          <div className="name">{element.product.name}</div>
          <div className="price">{element.product.price} €</div>
          <div className="quantity">
            <img className="button" onClick={() => decreaseQuantity(index)} src="minus.png" alt="" />
            <div>{element.quantity}</div>
            <img className="button" onClick={() => increaseQuantity(index)} src="add.png" alt="" />
          </div>
          <div className="sum">{(element.product.price * element.quantity).toFixed(2)} €</div>
          <img className="button" onClick={() => deleteProduct(index)} src="trash.png" alt="" />
      </div>
          <div className="mobile-row">
            <img className="button" onClick={() => decreaseQuantity(index)} src="minus.png" alt="" />
            <div>{element.quantity}</div>
            <img className="button" onClick={() => increaseQuantity(index)} src="add.png" alt="" />
          </div>
        </div>
      )}
      {cart.length > 0 &&
        <div className="cart-bottom">
          <div> Total Value: {calculatetotalValue()} €</div>
          <ParcelMachine />
          <Payment sum={calculatetotalValue()} empty={empty} />
        </div>}
    </div>
  )
}

export default Ostukorv