import React, { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import config from '../../data/config.json';


function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(response => response.json())
      .then(json => setCategories(json || [])); // || []
  }, []);

  const addCategory = ($event) => {
    if ($event.code === "Enter" || $event.type === "click") {
      categories.push({ "name": categoryRef.current.value }); //muuda addproductis ja editproductis ka objekti kujuks
      fetch(config.categoriesDbUrl, { "method": "PUT", "body": JSON.stringify(categories)})
        .then(response => response.json())
        .then(() => {
          setCategories(categories.slice());
          categoryRef.current.value = "";
          toast.success(t("Successfully added!"));
        })
    }
  };

  const deleteCategory = (index) => {
    categories.splice(index, 1);
    fetch(config.categoriesDbUrl, { "method": "PUT", "body": JSON.stringify(categories)})
        .then(response => response.json())
        .then(() => {
          setCategories(categories.slice());
          toast.success(t("Successfully deleted!"));
        })
  };

  return (
    <div>
      <ToastContainer />
      {categories.map((element, index) => (
        <div key={index}>
          {element.name}

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