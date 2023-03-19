import React, {useParams} from 'react';
import ProductsFromFile from '../../data/products.json';

function SingleProduct() {
  const {id} = useParams();
  const product = ProductsFromFile.find(element => element.id === Number(id) );
    // .find()
  return (
    <div>
    
    </div>
  )
}

export default SingleProduct