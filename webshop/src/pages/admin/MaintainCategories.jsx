import React, {useState, useRef} from 'react'
import categoriesFromFiles from '../../data/categories.json';

function MaintainCategories() {
  const [categories, setCategories] = useState (categoriesFromFiles)

  const categoryRef = useRef();

  const addCategory = () => {
   categoriesFromFiles.push(categoryRef.current.value);
   setCategories(categoriesFromFiles.slice())
  };
  


  const deleteCategory = (index) => {
    categoriesFromFiles.splice(index, 1);
    setCategories(categoriesFromFiles.slice());
  }
  

  return (
    <div>
      {categories.map((element, index) => (
        <div key={index}>
          {element}
          
          <button onClick={() => deleteCategory(index)}>Delete</button>
        </div>
      ))} <br />
      <label>Category</label> <br />
          <input ref={categoryRef} type="text" /> <br />
          <button onClick={addCategory}>Add</button>
    </div>
  )
}

export default MaintainCategories