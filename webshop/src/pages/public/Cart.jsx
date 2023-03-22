import React, { useEffect, useState } from 'react';
// import cartFile from '../../data/cart.json';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../../css/Cart.css';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(response => response.json())
      .then(json => setParcelMachines(json));
  }, []);

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0) {
      deleteProduct(index);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));

  }
  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const deleteProduct = (index) => {
    cart.splice(index, 1);
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
      )}
      <div className="cart-bottom">
        {cart.length > 0 && <div> Total Value: {calculatetotalValue()} €</div>}

        <select name="" id="">
          {parcelMachines.filter(pm => pm.A0_NAME === "EE").map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}</select>
      </div>
    </div>
  )
}

export default Cart