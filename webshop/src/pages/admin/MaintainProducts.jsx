import React, { useState, useRef } from 'react'
import {Link} from 'react-router-dom';
import productsFromFile from '../../data/products.json';


function MaintainProducts() {
const [products, setProducts] = useState(productsFromFile);
const searchRef = useRef();

const deleteProduct = () => {
//Kodus kustutamine
}

const searchFromProducts = () => {
  const filteredProducts = productsFromFile.filter(element =>
     element.name.toLowerCase().includes(searchRef.current.value.toLowerCase()));
  setProducts(filteredProducts);
} 



  return (
    <div>
      <input onChange={searchFromProducts} ref={searchRef} type="text" />
      <div>{products.length} pcs</div>
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
        <button onClick={() =>deleteProduct()}>Delete</button>
        <Link to={"/admin/edit-product/" + element.id}><button>Edit</button></Link>
        </div>
       )}
    </div>
  )
}

export default MaintainProducts