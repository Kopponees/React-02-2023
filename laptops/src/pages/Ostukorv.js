import React, { useState } from 'react';


function Ostukorv() {
    const [margid, uuendaMargid] = useState(JSON.parse(localStorage.getItem("margidOstukorvisVõti")) || []);
 
    const kustuta = (index) => {
        margid.splice(index,1);
        uuendaMargid(margid.slice());
        localStorage.setItem("margidOstukorvisVõti", JSON.stringify(margid));
    }

    const tyhjenda = () => {
        uuendaMargid([]);
    }

    return (
    <div>
        {margid.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
        {margid.length > 0 && <div>Ostukorvis on {margid.length} eset</div>}
        {margid.map((element, index) => 
        <div key={index}>
            {element}
             <button onClick={() => kustuta(index)}>x</button>
             </div>)}
    </div>
  )
}

export default Ostukorv