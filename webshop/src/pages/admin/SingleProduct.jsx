import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../data/config.json';

function SingleProduct() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const found = products.find(element => element.id === Number(id));

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []); // || [] kui sealt tuleb tagastus "null" ehk tühjus
        setLoading(false);
      });
  }, []);

  // if (products.length === 0) {
  //   return <div>Loading...</div>  ... kui on 0 siis näitab loading...
  // }

  if (isLoading === true) {
    return <div className="center">Loading...</div>
  }

  return (
    <div>
      {found === undefined && <div>Toodet ei leitud!</div>}
      {found !== undefined &&
        <div>
          <div>{found.name}</div>
          <div>{found.price}€</div>
          <img src={found.image} alt="" />
          <div>{found.category}</div>
          <div>{found.price}</div>
          <div>{found.description}</div>
          <div>{found.active}</div>
        </div>}
    </div>
  )
}

export default SingleProduct