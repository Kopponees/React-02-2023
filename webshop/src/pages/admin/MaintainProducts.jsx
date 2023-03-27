import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import config from '../../data/config.json';

function MaintainProducts() {
  const [dbProducts, setDbProducts] =  useState([]);
  const searchRef = useRef();
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []); // || [] kui sealt tuleb tagastus "null" ehk tühjus
        setDbProducts(json || []);
        setLoading(false);
      });
  }, []);

  const deleteProduct = (productClicked) => {
    const index = dbProducts.findIndex(prod => prod.id === productClicked.id);
    dbProducts.splice(index, 1);
    
    fetch(config.productsDbUrl, { "method": "PUT", "body": JSON.stringify(dbProducts)})
        .then(response => response.json())
        .then(() => searchFromProducts())
  }

  const searchFromProducts = () => {
    const filteredProducts = dbProducts.filter(element =>
      element.name.toLowerCase().includes(searchRef.current.value.toLowerCase()) || 
      element.description.toLowerCase().includes(searchRef.current.value.toLowerCase()) ||
      element.id.toString().toLowerCase().includes(searchRef.current.value.toLowerCase())
      );
    setProducts(filteredProducts);
  }

  if (isLoading === true) {
    return <div>Loading...</div>
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
          <button onClick={() => deleteProduct(element)}>Delete</button>
          <Link to={"/admin/edit-product/" + element.id}><button>Edit</button></Link>
        </div>
      )}
    </div>
  )
}

export default MaintainProducts