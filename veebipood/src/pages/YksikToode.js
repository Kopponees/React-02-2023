import React from 'react'
import { useParams } from 'react-router-dom';
import tootedFailist from '../data/tooted.json';

function YksikToode() {
    // localhost:3000/toode/:jrkNr
    const {jrkNr} = useParams();
    const leitud = tootedFailist[jrkNr];
  return (
    <div>
        {jrkNr}
        {leitud === undefined && <div>Toodet ei leitud!</div>}
       {leitud !== undefined && <div>
        <div>{leitud.nimi}</div>
         <div>{leitud.hind}000€</div>
          <img src={leitud.pilt} alt="" />
       </div>}
    </div>
  )
}

export default YksikToode