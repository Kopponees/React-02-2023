import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
// import categoriesFromFile from '../../data/categories.json';
import config from '../../data/config.json';

function AddProducts() {
  const [message, setMessage] = useState("Add new product!");
  const idRef = useRef();
  const nameRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    fetch(config.categoriesDbUrl)
    .then(res => res.json())
    .then(json => setCategories(json || []));

    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []); // || [] kui sealt tuleb tagastus "null" ehk tühjus
      });
  }, []);

  const add = () => {
    if (nameRef.current.value === "") {
      setMessage("A product with an empty name cannot be added");
    } else {
      products.push({
        "id": Number(idRef.current.value),
        "name": nameRef.current.value,
        "image": imageRef.current.value,
        "price": Number(priceRef.current.value),
        "category": categoryRef.current.value,
        "description": descriptionRef.current.value,
        "active": activeRef.current.checked,
      });
      nameRef.current.value = "";
      fetch(config.productsDbUrl, { "method": "PUT", "body": JSON.stringify(products) })
        .then(response => response.json())
        .then(() => {
          setMessage("Product added:" + nameRef.current.value + "!");
          idRef.current.value = "";
          imageRef.current.value = "";
          priceRef.current.value = "";
          nameRef.current.value = "";
          descriptionRef.current.value = "";
          activeRef.current.value = false;
      })
    }
  }
  const checkIdUniqueness = () => {
    const found = products.find(element => element.id === Number(idRef.current.value));
    if (found === undefined) {
      setMessage("");
    } else {
      setMessage("ID is not unique!");
    }
  }

  return (
    <div>
      {message} <br />
      <label>Product id</label> <br />
      <input onChange={checkIdUniqueness} ref={idRef} type="number" /> <br />
      <label>New product name:</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>New products image:</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>new products price:</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>new products category:</label> <br />
      <select ref={categoryRef}>
        {categories.map(element => <option key={element.name}>{element.name}</option>)}
      </select> <br />
      <label>New products description:</label> <br />
      <input ref={descriptionRef} type="text" /> <br />
      <label>New products active?</label> <br />
      <input ref={activeRef} type="checkbox" /> <br />
      <button disabled={message === "ID is not unique"} onClick={add}>Enter</button> <br />
    </div>
  )
}

export default AddProducts