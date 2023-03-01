import React from 'react';
import tooted from '../data/tooted.json';
import Ostukorv from '../data/ostukorv.json';
import {Link} from 'react-router-dom'


function Tooted() {

    const lisaOstukorvi = (klikitudToode) => {
        Ostukorv.push(klikitudToode);
    }

  return (
    <div>
       {tooted.map((el, index) =>
         <div key={index}>

           <Link to={"/toode/"+ index}>{el}</Link>
           
            <button onClick={() => lisaOstukorvi(el)}>Lisa Ostukorvi</button>
            </div>)}
    </div>
  )
}

export default Tooted