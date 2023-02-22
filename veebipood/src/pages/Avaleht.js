// ES7+ React/Redux/React-Native snippets
// rfce
// kui on väärtus sõnadega, siis on "" sees
import React, { useState } from 'react'

function Avaleht() {
  const [kogus, uuendaKogus] = useState(12); //  numbrilised-saan arvutusi teha, toote hind kogused, 
  const [sonum, uuendaSonum ] =useState(""); //sõnalised-isikukood, telefoninumber(ei tee arvutusi)
  const[laigitud, uuendaLaigitud] = useState(false); //kahendväärtus, koosneb vaid true/false. täisealine või mitte, makstud või mitte jne.


  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Kogus nullitud");
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("Kogus vähendatud");
  }

    function suurenda() {
      uuendaKogus(kogus + 1);
      uuendaSonum("Kogus suurendatud!");
    }
  
  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda laigitut</button>
      <div>{sonum}</div>
     {/* { kogus !== 0 && <button onClick={nulli}>Nulli</button>} ei ole 0, siis näitab*/}
     { kogus > 0 && <button onClick={nulli}>Nulli</button>}
      <button disabled={kogus ===0} onClick={vahenda}>-</button>
      <span className={ kogus >= 10 ? "kollane" : "roheline" }>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht