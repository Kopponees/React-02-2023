import React, { useState } from 'react'
import KaubadFailist from '../data/kaubad.json';
import "../css/Epood.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function EPood() {
  const [product] = useState(KaubadFailist);

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

  const blacksmiths = [...new Set(product.map((item) => item.blacksmith))];

  return (
    <>
      <div className="mb-2">
        <DropdownButton className="sepadnuppepood"
          as={ButtonGroup}
          id="dropdown-button-drop-blacksmith"
          variant="dark"
          title="Sepp"
        >
          {blacksmiths.map((blacksmith) => (
            <Dropdown.Item key={blacksmith} eventKey={blacksmith}>
              {blacksmith}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <DropdownButton className="toodenuppepood"
          as={ButtonGroup}
          id="dropdown-button-drop-name"
          variant="dark"
          title="Toode"
        >
          {product.map((item) => (
            <Dropdown.Item key={item.id} eventKey={item.name}>
              {item.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      <div className="product-wrapper-home">
        {product.map((element) => (
          <div className="product-home" key={element.id}>
            <img className="epoodimage" src={element.image} alt="" />
            <div className="epoodtekst">
              <div className="epoodname">{element.name}</div>
              <div className="epoodprice">{element.price}€</div>
              <div className="epoodblacksmith">{element.blacksmith}</div>
              <Button
                variant="outline-dark"
                onClick={() => lisaOstukorvi(element)}
              >
                lisa korvi
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EPood;
