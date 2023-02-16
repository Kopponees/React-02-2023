import React, { useState } from 'react'

function Kontakt() {
    const[aadress, määraAadress] = useState("Tallinn");
    const[telefon,määraTelefon] = useState("56267876");
    const[email, määraEmail] = useState("bla@bla.com");
    const[ingliseKeelne, määraIngliseKeelne] =useState("ei");

    const Eng =() => {
        määraAadress("London");
        määraTelefon("6969594");
        määraEmail("london@london.uk");
        määraIngliseKeelne("jah");
    }


  return (
    <div>
    
        <div>{aadress}</div>
        <div>{telefon}</div>
        <div>{email}</div>
        <button onClick={Eng}>Muuda inglise keelseks</button>
        { ingliseKeelne=== "jah" && <div>Leht on inglise keelne</div>}
    </div>
  )
}

export default Kontakt