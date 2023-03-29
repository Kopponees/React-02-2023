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
  const pay = () => {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const bodyData = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": calculatetotalValue(),
      "order_reference": Math.random() * 9999999,
      "nonce": "a9b7f7e" + new Date() + Math.random() * 9999999,
      "timestamp": new Date(),
      "customer_url": "https://webshop-ea72b.web.app"
    }
    const headersData = {
      "Content-Type": "application/json",
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA=="
    }

    fetch(url, { "method": "POST", "body": JSON.stringify(bodyData), "headers": headersData })
      .then(response => response.json())
      .then(json => {
        if (json.payment_link !== undefined) {
          empty();
        }
        window.location.href = json.payment_link
      }); //vastusest(201 ehk edukas) realt, mis on makse link
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
      {cart.length > 0 &&
        <div className="cart-bottom">
          <div> Total Value: {calculatetotalValue()} €</div>
          <select name="" id="">
            {parcelMachines.filter(pm => pm.A0_NAME === "EE").map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}</select>
          <Button variant='contained' onClick={pay}>Pay</Button>
        </div>}
    </div>
  )
}

export default Cart