import React, {useState} from 'react';
import tootedFailist from '../data/tooted.json';
import {Link} from 'react-router-dom'

function HaldaTooted() {
    const[tooted, uuendaTooted] = useState(tootedFailist);

    const kustuta = (jarjekorraNumber) => {
        tootedFailist.splice(jarjekorraNumber, 1);
        uuendaTooted(tootedFailist.slice());
    }


  return (
    <div>
        {tooted.map((el, ix) => 
            <div key={ix}>
              <img className="pilt"src={el.pilt} alt="" />
              <div>{el.pilt}</div>
              <div>{el.nimi}</div>
              <div>{el.hind} 000€</div>
              <div>{el.aktiivne}</div>
                <button onClick={() => kustuta(ix)}>X</button>
                <Link to={"/muuda/" +ix}><button>Muuda</button></Link>
            </div>)}
    </div>
  )
}

export default HaldaTooted