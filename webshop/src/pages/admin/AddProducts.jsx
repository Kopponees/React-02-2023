import React, { useState } from 'react';
import { useRef } from 'react';
import productsFromFile from '../../data/products.json';
import categoriesFromFile from '../../data/categories.json';

function AddProducts() {
  const [products] = useState(productsFromFile);
  const [message, setMessage] = useState("Add new product!");

  const idRef = useRef();
  const nameRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();

  const add = () => {
    if (nameRef.current.value === "") {
      setMessage("A product with an empty name cannot be added");
    } else {
      setMessage("Product added!" + nameRef.current.value);
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
    }
  }
  const checkIdUniqueness = () => {
    const found = productsFromFile.find(element => element.id === Number(idRef.current.value));
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
        {categoriesFromFile.map(element => <option>{element}</option>)}
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