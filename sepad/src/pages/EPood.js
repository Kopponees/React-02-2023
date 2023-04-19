import React, { useState } from 'react'
import KaubadFailist from '../data/kaubad.json';
import "../css/Epood.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function EPood() {
  const [product]= useState(KaubadFailist);

  const lisaOstukorvi = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartLS.findIndex(cartProduct => cartProduct.product.id === productClicked.id);
    if (index !== -1) {
      cartLS[index].quantity = cartLS[index].quantity + 1;
    } else {
      cartLS.push({ product: productClicked, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cartLS));
  };
    
   
  return (
    
    <>
      <div className="mb-2">
        {[ 'end',].map(
          (direction) => (
            <DropdownButton
              as={ButtonGroup}
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="dark"
              title="tooted"
            >
              <Dropdown.Item eventKey="1"></Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          ),
        )}
      </div>
      <div className="product-wrapper-home">
      {product.map(element=>
        <div className="product-home">
          <img className="epoodimage" src={element.image} alt="" />
          <div className="epoodtekst">
            <div className="epoodname">{element.name}</div>
          <div className="epoodprice">{element.price}€</div>
          <div className="epoodblacksmith">{element.blacksmith}</div>
          <Button variant="outline-dark" onClick={() => lisaOstukorvi(element)}>lisa korvi</Button>
          </div>
          
        </div>
        )}
    </div>
      
    </>
  );
   
}

export default EPood