import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import config from '../../data/config.json';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { CartSumContext } from '../../store/CartSumContext';
import SortButtons from '../../components/home/SortButtons';
import FilterBar from '../../components/home/FilterBar';
import "../../css/Homepage.css";

function HomePage() {
  const [dbProducts, setDbProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { cartSum, setCartSum } = useContext(CartSumContext);

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
    setCartSum(Number(cartSum) + productClicked.price);
    localStorage.setItem("cart", JSON.stringify(cartLS));
  }

    if (isLoading === true) {
    return <div className="center">Loading...</div>
  }

  return (
    <div>
      <FilterBar dbProducts={dbProducts} setProducts={setProducts} categories={categories}/>
      <div>{products.length} pcs</div>
      <SortButtons products={products} setProducts={setProducts} />
      <div className="product-wrapper-home">
        {products.map(element =>
        <div className="product-home" key={element.id}>
          <Link to={"/product/" + element.id}>
            <img src={element.image} alt="" />
            <div>{element.name}</div>
            <div>{element.price}</div>
          </Link>
          <Button variant="contained" onClick={() => addToCart(element)}>Add to cart</Button>
        </div>
      )}</div>
    </div>
  )
}

export default HomePage