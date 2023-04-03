import React from 'react'
import Button from '@mui/material/Button';

function FilterBar({dbProducts, setProducts, categories}) {

    const filterByCategory = (categoryClicked) => {
        const result = dbProducts.filter(element => element.category === categoryClicked);
        setProducts(result);
      }
      
  return (
    <div>
        {categories.map(element =>
        <Button key={element.name} onClick={() => filterByCategory(element.name)}>
          {element.name}
        </Button>)}
    </div>
  )
}

export default FilterBar