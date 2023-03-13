import React, {useState} from 'react';
import {useRef} from 'react';
import productsFromFile from '../../data/products.json';

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
    if (nameRef.current.value ==="") {
      setMessage("A product with an empty name cannot be added");
    } else {
      setMessage("Product added!" + nameRef.current.value);
    products.push({
      "id":idRef.current.value,
      "name":nameRef.current.value,
      "image":imageRef.current.value,
      "price":Number(priceRef.current.value),
      "active":activeRef.current.checked,
    });
    nameRef.current.value = "";
    }
  }

  return (
    <div>
      {message} <br />
       <label>Product id</label> <br />
      <input ref={idRef} type="text" /> <br />
      <label>New product name</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>Image</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>Price</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>Category</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef} type="text" /> <br />
      <label>Active</label> <br />
      <input ref={activeRef} type="checkbox" /> <br />
      <button onClick={add}>Enter</button>
    </div>
  )
}

export default AddProducts