import React, { useState } from 'react'
import KaubadFailist from '../data/kaubad.json';

function EPood() {
  const [toode, muudaToodet]= useState(KaubadFailist);

  const lisaOstukorvi = (klikitudToode) => {
    const cartLS = JSON.parse(localStorage.getItem("ostukorv")) || [];
    const index = cartLS.findIndex(ostukorvToode => ostukorvToode.toode.id === klikitudToode.id);
    if (index !== -1) {
      cartLS[index].quantity = cartLS[index].quantity + 1;
    } else {
      cartLS.push({ kaup: klikitudToode, quantity: 1 });
    }}
    

  return (
    <div>
      {toode.map(element=>
        <div className="kaubad">
          <img className="epoodimage" src={element.image} alt="" />
          <div className="epoodtekst">
            <div className="epoodname">{element.name}</div>
          <div className="epoodprice">{element.price}€</div>
          <div className="epoodblacksmith">{element.blacksmith}</div>
          <button onClick={lisaOstukorvi}>lisa korvi</button>
          </div>
          
        </div>
        )}
    </div>
  )
}

export default EPood