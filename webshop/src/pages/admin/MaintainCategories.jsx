import React, { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import config from '../../data/config.json';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';



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
    <div className="center">
      <ToastContainer />
      <div className="categories">
      {categories.map((element, index) => (
        <div key={index} className="category">
          <span>{element.name}</span>
        <Button variant='outlined' onClick={() => deleteCategory(index)}>x</Button>
        </div>
      ))} 
      </div>
      <br />
      {/* <label>Category</label> <br /> */}
      <TextField label="Category" onKeyUp={addCategory} inputRef={categoryRef} type="text" /> <br />
      <Button variant='contained' onClick={addCategory}>Add</Button>
    </div>
  )
}

export default MaintainCategories