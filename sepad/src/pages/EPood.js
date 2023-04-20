import React, { useState } from 'react'
import KaubadFailist from '../data/kaubad.json';
import "../css/Epood.css";
import Button from 'react-bootstrap/Button';
import Checkbox from '@mui/material/Checkbox';


function EPood() {
  const [products] = useState(KaubadFailist);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBlacksmith, setSelectedBlacksmith] = useState(null);

  const lisaOstukorvi = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartLS.findIndex(cartProduct => cartProduct.product.id === productClicked.id);
    if (index !== -1) {
      cartLS[index].quantity = cartLS[index].quantity + 1;
    } else {
      cartLS.push({ product: productClicked, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cartLS));
    };
  }

  const categories = [...new Set(products.map(product => product.category))];
  const blacksmiths = [...new Set(products.map(product => product.blacksmith))];
  const filteredProducts = products.filter(product => {
    if (selectedCategory && selectedCategory !== product.category) {
      return false;
    }
    if (selectedBlacksmith && selectedBlacksmith !== product.blacksmith) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <div className="checkbox-wrapper">
        <div className="category-wrapper">
          <div>toote kategooriad:</div>
          {categories.map(category => (
            <div key={category}>
              <Checkbox
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(selectedCategory === category ? null : category)}
                label={category}
              />
              <span>{category}</span>
            </div>
          ))}
        </div>
        <div className="blacksmith-wrapper">
          <div>sepad:</div>
          {blacksmiths.map(blacksmith => (
            <div key={blacksmith}>
              <Checkbox
                checked={selectedBlacksmith === blacksmith}
                onChange={() => setSelectedBlacksmith(selectedBlacksmith === blacksmith ? null : blacksmith)}
                label={blacksmith}
              />
              <span>{blacksmith}</span>
            </div>
          ))}
        </div> </div>

      <div className="product-wrapper-home">
        {filteredProducts.map(element =>
          <div className="product-home" key={element.id}>
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
    </div>
  );
}

export default EPood;