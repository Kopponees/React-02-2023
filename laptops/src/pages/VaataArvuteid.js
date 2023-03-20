import React from 'react'

function VaataArvuteid() {
  const margid = JSON.parse(localStorage.getItem("margid")) || [];
  const mudelid = JSON.parse(localStorage.getItem("mudelid")) || [];
  const maksumused = JSON.parse(localStorage.getItem("maksumused")) || [];

  const lisaOstukorvi = (klikitudMark) => {

    let margidOstukorvisMuutuja = localStorage.getItem("margidOstukorvisVõti"); 
    margidOstukorvisMuutuja = JSON.parse(margidOstukorvisMuutuja) || [];
    margidOstukorvisMuutuja.push(klikitudMark);
    margidOstukorvisMuutuja = JSON.stringify(margidOstukorvisMuutuja);
    localStorage.setItem("margidOstukorvisVõti",margidOstukorvisMuutuja);

  }


  
  return (
    <div>

      <div>{margid.map(element =>
         <div>
          {element}
          <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
          </div>)}</div>
      <div>{mudelid.map(element => <div>{element}</div>)}</div>
      <div>{maksumused.map(element => <div>{element}</div>)}</div>
    </div>
  )
}

export default VaataArvuteid