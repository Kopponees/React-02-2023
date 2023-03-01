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
        {leitud}
    </div>
  )
}

export default YksikToode