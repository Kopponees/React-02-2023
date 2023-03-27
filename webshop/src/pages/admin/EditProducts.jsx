import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import config from '../../data/config.json';


function EditProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();//edit-product/:id App.jsis
  const product = products.find(element => element.id === Number(id));//HTML-i defaultvalue={product.id}
  const index = products.findIndex(element => element.id === Number(id));// productsFromFile[index] = UUS_TOODE
  const [message, setMessage] = useState("");
  const idRef = useRef();
  const nameRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch(config.categoriesDbUrl)
    .then(res => res.json())
    .then(json => setCategories(json || []));

    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []); // || [] kui sealt tuleb tagastus "null" ehk tühjus
        setLoading(false);
      });
  }, []);

  const edit = () => {
    if (idRef.current.value === "") {
      setMessage("Can't edit product to empty id!");
    } else {
      setMessage("Product edited!" + nameRef.current.value);
      products[index] = {
        "id": Number(idRef.current.value),
        "name": nameRef.current.value,
        "image": imageRef.current.value,
        "price": Number(priceRef.current.value),
        "category": categoryRef.current.value,
        "description": descriptionRef.current.value,
        "active": activeRef.current.checked,
      };
     
      fetch(config.productsDbUrl, { "method": "PUT", "body": JSON.stringify(products) })
        .then(response => response.json())
        .then(() => navigate("/admin/maintain-products"))
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

  if (isLoading === true) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {product !== undefined && <div>
        {message} <br />
        <label>Product's id:</label> <br />
        <input onChange={checkIdUniqueness} ref={idRef} defaultValue={product.id} type="number" /> <br />
        <label>Product's name</label> <br />
        <input ref={nameRef} defaultValue={product.name} type="text" /> <br />
        <label>Product's image</label> <br />
        <input ref={imageRef} defaultValue={product.image} type="text" /> <br />
        <label>Product's price</label> <br />
        <input ref={priceRef} defaultValue={product.price} type="number" /> <br />
        <label>Product's category</label> <br />
        <select ref={categoryRef} defaultValue={product.category}>
          {categories.map(element => <option key={element.name}>{element.name}</option>)}
        </select> <br />
        <label>Product's description</label> <br />
        <input ref={descriptionRef} defaultValue={product.description} type="text" /> <br />
        <label>Product's active</label> <br />
        <input ref={activeRef} defaultChecked={product.active} type="checkbox" /> <br />
        <button disabled={message === "ID is not unique!"} onClick={edit}>Edit</button> <br />
      </div>}
      {product === undefined && <div>Product not found!</div>}
    </div>
  )
}

export default EditProducts