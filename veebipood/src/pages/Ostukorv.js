import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import ostukorvFailist from '../data/ostukorv.json';


function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist)
  

  const kustuta = (jrkNr) => {
    ostukorvFailist.splice(jrkNr,1);
    uuendaOstukorv(ostukorvFailist.slice());
  };
  const lisa = (klikitudToode) => {
    ostukorvFailist.push(klikitudToode);
    uuendaOstukorv(ostukorvFailist.slice());

  }
  const tyhjenda = () => {
    ostukorvFailist = [];
    uuendaOstukorv([]);
  }

  const arvutaKogusumma = () => {
    let kogusumma = 0; // const tüüpi muutujaid rohkem muuta ei saa, let tüüpi saab lõpmatuseni muuta
    ostukorvFailist.forEach(yksToode => kogusumma= kogusumma +  yksToode.hind);
    return kogusumma;        // väljastan kogusumma htmli
  }

  return (
    <div>
      { ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
     { ostukorv.length === 0 && <div>Ostukorv on tühi. <Link to="/">Tooteid lisama</Link></div>}
     { ostukorv.length > 0 && <div>Ostukorvi esemeid on {ostukorv.length} tk</div>}
        <div>
          {ostukorv.map((element, jrkNr) =>
        <div key={jrkNr}>
          <img className="pilt" src={element.pilt} alt="" />
          <div>{element.pilt}</div>
          <div>{element.hind} 000€</div>
          <button onClick={() => kustuta(jrkNr)}>X</button>
          <button onClick={() => lisa(element)}>+</button>
        </div>)}
      </div>
      {ostukorv.length > 0 && <div>Summa kokku: {arvutaKogusumma()} €</div>}
    </div>
  )
}

export default Ostukorv