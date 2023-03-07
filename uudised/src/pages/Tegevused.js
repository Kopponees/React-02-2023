import React, {useState} from 'react'
import tegevusedFailist from '../tegevused.json';

function Tegevused() {
    const [tegevused, uuendaTegevused] = useState(tegevusedFailist);

    const n2itaKasutajaYks = () => {
        const vastus = tegevused.filter(element => element.userId === 1);
        uuendaTegevused(vastus)
    }

    const n2itaKasutajaKaks = () => {
        const vastus = tegevused.filter(element => element.userId === 2);
        uuendaTegevused(vastus)
    }

    const n2itaKasutajaKolm = () => {
        const vastus = tegevused.filter(element => element.userId === 3);
        uuendaTegevused(vastus)
    }

    const n2itaKasutajaValmis = () => {
        const vastus = tegevused.filter(element => element.completed === true);
        uuendaTegevused(vastus)
    }

    const n2itaKasutajaMitteValmis = () => {
        const vastus = tegevused.filter(element => element.completed === false);
        uuendaTegevused(vastus)
    }

    const n2itaKasutajaT = () => {
        const vastus = tegevused.filter(element => element.title.startsWith("t"));
        uuendaTegevused(vastus)
        
    }
    const n2itaKasutajaUle20 = () => {
        const vastus = tegevused.filter(element => element.title.length > 20);
        uuendaTegevused(vastus)
    }

    const n2itaK6iki = () => {
        uuendaTegevused(tegevusedFailist);
    }


  return (
    <div className ="tegevused">
    <button onClick={() => n2itaKasutajaYks()}>Kuva kasutaja ID 1 tegevused</button>
    <button onClick={() => n2itaKasutajaKaks()}>Kuva kasutaja ID 2 tegevused</button>
    <button onClick={() => n2itaKasutajaKolm()}>Kuva kasutaja ID 3 tegevused</button>
    <button onClick={() => n2itaKasutajaValmis()}>Kuva valmis tegevused</button>
    <button onClick={() => n2itaKasutajaMitteValmis()}>Kuva kõik mittevalmis tegevused</button>
    <button onClick={() => n2itaKasutajaT()}>Kuva kõik "t" tähega tegevused</button>
    <button onClick={() => n2itaKasutajaUle20()}>Kuva kõik üle 20 tähemärgiga tegevused</button>
    <button onClick={() => n2itaK6iki()}>Kuva kõik tegevused tagasi</button>
       {tegevused.map(element =>
       <div>
        <div>{element.userId}</div>
        <div>{element.id}</div>
        <div>{element.title}</div>
        <div>{element.completed}</div>
       </div>)}
    </div>);
}

export default Tegevused