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
        "open-time": openTimeRef.current.value,
        "latitude": latitudeRef.current.value,
        "longitude": longitudeRef.current.value,
      });
      nameRef.current.value = "";
      fetch(config.shopsDbUrl, { "method": "PUT", "body": JSON.stringify(shops) })
        .then(response => response.json())
        .then(() => {
          setMessage("Shop added:" + nameRef.current.value + "!");
          nameRef.current.value = "";
          openTimeRef.current.value = "";
          latitudeRef.current.value = "";
          longitudeRef.current.value = "";
        })
    }
  }
  return (
    <div>
      {message} <br />
      <label>Shops name:</label>
      <input ref={nameRef} type="text" />
      <label>Open time:</label>
      <input ref={openTimeRef} type="text" />
      <label>Latitude:</label>
      <input ref={latitudeRef} type="text" />
      <label>Longitude:</label>
      <input ref={longitudeRef} type="text" />
      <button onClick={add}>Add new shop</button>
    </div>
  )
}

export default MaintainShops