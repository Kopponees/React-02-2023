import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import config from '../../data/config.json';
import Button from '@mui/material/Button';

function HomePage() {
  const [dbProducts, setDbProducts] = useState([]); //veendun, et siin oleks alati andmebaasist(243tk)
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));

    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []); // || [] kui sealt tuleb tagastus "null" ehk tühjus
        setDbProducts(json || []);
        setLoading(false);
      });
  }, []);


  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartLS.findIndex(cartProduct => cartProduct.product.id === productClicked.id);
    if (index !== -1) {
      cartLS[index].quantity = cartLS[index].quantity + 1;
    } else {
      cartLS.push({ product: productClicked, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cartLS));


    //1. võtame kogu vana ostukorvi seisu localstoragesse
    //2. tuleb võtta jutumärgid maha(siiamaani-keel, telefon, email, aadress,veebilehe_varv)
    //3. lisame ostukorvi ühe toote juurde
    //4. panna jutumärgis tagasi peale
    //5. paneme kogu ostukorvi sisu tagasi
  }

  const filterByCategory = (categoryClicked) => {
    const result = dbProducts.filter(element => element.category === categoryClicked);
    setProducts(result);
  }

  if (isLoading === true) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {/* <button onClick={() => filterByCategory("belts")}>belts</button>
      <button onClick={() => filterByCategory("tent")}>tents</button>
      <button onClick={() => filterByCategory("camping")}>camping</button>
      <button onClick={() => filterByCategory("jeans")}>jeans</button> */}
      {categories.map(element =>
        <button key={element.name} onClick={() => filterByCategory(element.name)}>
          {element.name}
        </button>)}
      <div>{products.length} pcs</div>
      {products.map(element =>
        <div key={element.id}>
          <Link to={"/product/" + element.id}>
            <img src={element.image} alt="" />
            <div>{element.id}</div>
            <div>{element.name}</div>
            <div>{element.image}</div>
            <div>{element.price}</div>
            <div>{element.category}</div>
            <div>{element.description}</div>
            <div>{element.active}</div>
          </Link>
          <Button variant="contained" onClick={() => addToCart(element)}>Add to cart</Button>
        </div>
      )}
    </div>
  )
}

export default HomePage