import React from 'react'
import { useState } from 'react'
 
function Meist() {
  const[n2itaEmaili, uuendaN2itaEmaili] = useState(false);
  const[telefon, uuendaTelefon] = useState(localStorage.getItem("telefon") || "");
  const[aadress, uuendaAadress] = useState(localStorage.getItem("aadress") || "" );

  return (
    <div>
      Meie email: {n2itaEmaili === true && localStorage.getItem("email")}
                  {n2itaEmaili === false && <button onClick={() => uuendaN2itaEmaili(true)}>Näita emaili</button>}
       <br />
      Meie telefon: {telefon}
       { telefon.startsWith("+372") === false && <button onClick={() => uuendaTelefon("+372" + telefon)}>Lisa suunakood</button>}
       <br />
      <span className={aadress.charAt(0) === aadress.charAt(0).toLowerCase() ? "kollane" : "roheline"}>Meie aadress: {aadress}</span>
        <button onClick={() => uuendaAadress(aadress.toUpperCase())}>Aadress suurteks tähtedeks</button>
        <button onClick={() => uuendaAadress(aadress.toLowerCase())}>Aadress väikesteks tähtedeks</button>
       <br />
    </div>
  )
}

export default Meist