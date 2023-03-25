import {useRef, useState } from 'react';

function LisaUudis () {
    const [sonum, uuendaSonum] = useState("");
    const uudiseRef= useRef();
   
    const lisaUusUudis= () => {
        let uudised = localStorage.getItem("uudised");
        uudised = JSON.parse(uudised) || [];
        uudised.push(uudiseRef.current.value);
        uudised = JSON.stringify(uudised);
        localStorage.setItem("uudised", uudised);
    }

    const kontrolli = () => {
        uuendaSonum("muudetud");

        if (uudiseRef.current.value.charAt(0) === uudiseRef.current.value.charAt(0).toLowerCase()) {
            uuendaSonum("Sisestasid uudise väikese tähega, palun paranda!")
        } 

        if (uudiseRef.current.value.includes("  ")) {
            uuendaSonum("Sisestasid kaks tühikut, palun paranda!")
        } 
    }
    
    return ( 
    <div>
        <div>{sonum}</div>
        <label>Uudise nimi:</label> <br />
        <input onChange={kontrolli} ref={uudiseRef} type="text" /> <br />
        <button onClick={() => lisaUusUudis()}>Lisa uudis</button> <br />
    </div> );
}

export default LisaUudis;