import React, {useState} from 'react'
import categoriesFromFiles from '../../data/categories.json';

function MaintainCategories() {
  const [categories, setCategories] = useState (categoriesFromFiles)

  const deleteCategory = () => {

  }

  const addCategory = () => {
    // categoriesFromFiles.push(categoryRef.current.value);
    // setCategories(categoriesFromFiles)
  }
  return (
    <div>
      {categories.map(element => 
      <div>
        {element}
        <button onClick={() => deleteCategory}>Delete</button>
      </div>)}
    </div>
  )
}

export default MaintainCategories