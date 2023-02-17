import React from 'react';
import {useRef,useState} from 'react';
 
function LisaTegelane() {

    const [message, setMessage] = useState("");
    const nimiRef= useRef();

    const lisaUusTegelane = () => {
        if (nimiRef.current.value === "") {
        setMessage("Tühja nimega ei saa sisestada");
        } else {
            setMessage("Tegelane lisatud");
        }
    }


  return (
    <div>
        <div>{message}</div>
        <label>Tegelase nimi</label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <button onClick={lisaUusTegelane}>Lisa uus</button> <br />
    </div>
  )
}

export default LisaTegelane