import React, {useState, useRef} from 'react'
import categoriesFromFiles from '../../data/categories.json';
import {ToastContainer, toast} from 'react-toastify';
import { useTranslation } from 'react-i18next';

function MaintainCategories() {
  const [categories, setCategories] = useState(categoriesFromFiles);
  const categoryRef = useRef();
  const { t } = useTranslation();

  const addCategory = ($event) => {
    if ($event.code === "Enter" || $event.type === "click") {
  categoriesFromFiles.push(categoryRef.current.value);
   setCategories(categoriesFromFiles.slice());
   categoryRef.current.value = "";
   toast.success(t("Successfully added!"));
    }
  };
  
  const deleteCategory = (index) => {
    categoriesFromFiles.splice(index, 1);
    setCategories(categoriesFromFiles.slice());
  }
  
  return (
    <div>
      <ToastContainer />
      {categories.map((element, index) => (
        <div key={index}>
          {element}
          
          <button onClick={() => deleteCategory(index)}>Delete</button>
        </div>
           ))} <br />
        <label>Category</label> <br />
        <input onKeyUp={addCategory} ref={categoryRef} type="text" /> <br />
        <button onClick={addCategory}>Add</button>
    </div>
  )
}

export default MaintainCategories