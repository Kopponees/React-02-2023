import React, { useRef, useState } from 'react'

function TegelaseLisamine() {
    const [sonum, uuendaSonum] = useState("Lisa uus tegelane!");
    const eesnimiRef= useRef();
    const perenimiRef= useRef();
    const elukohtRef= useRef();
    const vanusRef= useRef();

    
        const lisa = () => {
            if (eesnimiRef.current.value === "") {
              uuendaSonum("Tühja nimetusega ei saa lisada");
            } else {
              uuendaSonum("Tegelane lisatud!");
              const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
              tegelased.push({
                "eesnimi": eesnimiRef.current.value,
                "perenimi": perenimiRef.current.value,
                "elukoht": elukohtRef.current.value,
                "vanus": Number(vanusRef.current.value)
              })
              localStorage.setItem("tegelased", JSON.stringify(tegelased));
            }
          }
        
  return (
    <div>
         <div>{sonum}</div> <br />
        <label>Eesnimi:</label>
        <input ref={eesnimiRef}type="text" /> <br />
        <label>Perenimi:</label>
        <input ref={perenimiRef}type="text" /> <br />
        <label>Elukoht:</label>
        <input ref={elukohtRef}type="text" /> <br />
        <label>Vanus:</label>
        <input ref={vanusRef}type="number" /> <br />
        <button onClick={lisa}>Sisesta</button>
    </div>
  )
}

export default TegelaseLisamine