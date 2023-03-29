import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useRef, useState } from 'react'
import config from '../../data/config.json';

function MaintainShops() {
  const [message, setMessage] = useState("Add new shop!");
  const nameRef = useRef();
  const openTimeRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch(config.shopsDbUrl)
      .then(res => res.json())
      .then(json => setShops(json || []));
  }, []);


  const add = () => {
    if (nameRef.current.value === "") {
      setMessage("A shop with an empty name cannot be added");
    } else {
      shops.push({
        "name": nameRef.current.value,
        "openTime": openTimeRef.current.value,
        "latitude": latitudeRef.current.value,
        "longitude": longitudeRef.current.value,
      });
      nameRef.current.value = "";
      fetch(config.shopsDbUrl, { "method": "PUT", "body": JSON.stringify(shops) })
        .then(response => response.json())
        .then(() => {
          setMessage("Shop added" + nameRef.current.value + "!");
          nameRef.current.value = "";
          openTimeRef.current.value = "";
          latitudeRef.current.value = "";
          longitudeRef.current.value = "";
        })
    }
  }
  const deleteShop = (index) => {
    shops.splice(index, 1);
    fetch(config.shopsDbUrl, { "method": "PUT", "body": JSON.stringify(shops)})
        .then(response => response.json())
        .then(() => {
          setShops(shops.slice());
          toast.success("Successfully deleted!");
        })
  };
  return (
    <div>
      <ToastContainer />
      {shops.map((element, index) =>
   <span>
    <div>{element.name}</div>
      <div>{element.latitude}</div>
      <div>{element.longitude}</div>
      <Button variant='outlined' onClick={() => deleteShop(index)}>x</Button>
   </span>
    )}
      {message} <br />
      <label>Shops name:</label>
      <input ref={nameRef} type="text" />
      <label>Open time:</label>
      <input ref={openTimeRef} type="text" />
      <label>Latitude:</label>
      <input ref={latitudeRef} type="text" />
      <label>Longitude:</label>
      <input ref={longitudeRef} type="text" />
      <button onClick={add}>Add</button>
    </div>
  )
}

export default MaintainShops