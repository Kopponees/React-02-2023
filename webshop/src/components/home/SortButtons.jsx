import { Button } from '@mui/material'
import React from 'react'

function SortButtons( { products, setProducts } ) {
    const sortAZ = () => {
        const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
        setProducts([...sortedProducts]);
      };
    
      const sortZA = () => {
        const sortedProducts = products.sort((a, b) => b.name.localeCompare(a.name));
        setProducts([...sortedProducts]);
      };
    
      const sortPriceAscending = () => {
        const sortedProducts = products.sort((a, b) => a.price - b.price);
        setProducts([...sortedProducts]);
      };
    
      const sortPriceDescending = () => {
        const sortedProducts = products.sort((a, b) => b.price - a.price);
        setProducts([...sortedProducts]);
      };
    return (
        <div>
            <Button onClick={sortAZ}>Sort A-Z</Button>
            <Button onClick={sortZA}>Sort Z-A</Button>
            <br />
            <Button onClick={sortPriceAscending}>Sort price ascending</Button>
            <Button onClick={sortPriceDescending}>Sort price descending</Button>
        </div>
    )
}

export default SortButtons