import React, {useState} from 'react'

function Kujundus() {
    const [valitud, uuendaValitud] = useState("family");
     
  return (
    <div>
        <span
         className={valitud === "family" ? "pakett-aktiivne" : "Pakett"}
        onClick={() => uuendaValitud("family")}>
            Family
         </span>
        <span
         className={valitud === "standard" ? "pakett-aktiivne" : "Pakett"}
        onClick={() => uuendaValitud("standard")}>
            Standard
        </span>
         <span
         className={valitud === "mini" ? "pakett-aktiivne" : "Pakett"}
        onClick={() => uuendaValitud("mini")}>
            Mini
        </span>
    
    </div>
  )
}

export default Kujundus