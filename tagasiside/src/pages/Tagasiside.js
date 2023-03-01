import React, {useState, useRef } from 'react'

function Tagasiside() {
    const [tagasiside, uuendaTagasiside] = useState (["Oli hea", "Huvitav", "Teistsugune", "Põnev"]);
    const tagasisideRef = useRef();

function kustuta(index) {
    tagasiside.splice(index,1);
    uuendaTagasiside(tagasiside.slice());
}    

function lisaUusTagasiside(){
tagasiside.push(tagasisideRef.current.value);
uuendaTagasiside(tagasiside.slice())
}
  return (
    <div>Tagasisided:
        {tagasiside.map((element, index) =>
        <div>
            <span>{element}</span>
            <button onClick={() => kustuta(index)}>X</button>
        </div>)}

        <br />
        <label>Lisa uus tagasiside:</label>
        <input ref= {tagasisideRef} type="text" />
        <button onClick={() => lisaUusTagasiside()}>Sisesta</button>
      
    </div>
    
  )
}

export default Tagasiside