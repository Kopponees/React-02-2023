import React, {useState} from 'react';
import tootedFailist from '../data/tooted.json';
import Ostukorv from '../data/ostukorv.json';
import {Link} from 'react-router-dom'


function Tooted() {

  const [tooted, uuendaTooted] = useState(tootedFailist);

    const lisaOstukorvi = (klikitudToode) => {
        Ostukorv.push(klikitudToode);
    }

    const sorteeriAZ = () => {
      tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
      uuendaTooted(tooted.slice());
    }
    
    const sorteeriZA = () => {
      tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
      uuendaTooted(tooted.slice());
    }
    
    const sorteeriHindKasvavalt = () => {
      tooted.sort((a,b) => a.hind - b.hind);
      uuendaTooted(tooted.slice());
    }
      
    const sorteeriHindKahanevalt = () => {
      tooted.sort((a,b) => b.hind - a.hind);
      uuendaTooted(tooted.slice());
      }
      // const filtreeriBgaAlgavad = () => {
      //   const tulem = tootedFailist.filter(toode => toode.nimi.startsWith("B"));
      //   uuendaTooted(tulem);
      // }
      // const filtreeriNgaAlgavad = () => {
      //   const tulem = tootedFailist.filter(toode => toode.nimi.startsWith("N"));
      //   uuendaTooted(tulem);
      // }
      // const filtreeriTgaAlgavad = () => {
      //   const tulem = tootedFailist.filter(toode => toode.nimi.startsWith("T"));
      //   uuendaTooted(tulem);
      // }
      const filtreeriAlguseJargi = (esiTaht) => {
      const tulem = tootedFailist.filter(toode => toode.nimi.startsWith(esiTaht));
      uuendaTooted(tulem);
      }
      

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriHindKasvavalt}>Sorteeri hind kasvavalt</button>
      <button onClick={sorteeriHindKahanevalt}>Sorteeri hind kahanevalt</button>
      <br />
      <button onClick={() =>filtreeriAlguseJargi("B")}>B</button>
      <button onClick={() =>filtreeriAlguseJargi("N")}>N</button>
      <button onClick={() =>filtreeriAlguseJargi("T")}>T</button>
       {tooted.map((el, index) =>
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