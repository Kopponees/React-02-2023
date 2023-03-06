import React from 'react';
import tootedFailist from '../data/tooted.json';
import Ostukorv from '../data/ostukorv.json';
import {Link} from 'react-router-dom'


function Tooted() {

    const lisaOstukorvi = (klikitudToode) => {
        Ostukorv.push(klikitudToode);
    }

  return (
    <div>
       {tootedFailist.map((el, index) =>
         <div key={index}>

           <Link to={"/toode/"+ index}>
            <img className="pilt" src={el.pilt} alt="" />
           <div>{el.nimi}</div>
           <div>{el.hind} 000€</div> 
            <div>{el.pilt}</div>
           <div>{el.aktiivne + 0 }</div>
           
            </Link>
           
            <button onClick={() => lisaOstukorvi(el)}>Lisa Ostukorvi</button>
            </div>)}
    </div>
  )
}

export default Tooted