import React, { useRef, useState} from 'react';
import tooted from '../data/tooted.json';

function LisaToode() {
  const [ sonum, uuendaSonum] = useState("Lisa uus toode!");
  const inputiLuger = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

// function lisa () {
//   uuendaSonum("Toode lisatud");
// }

const lisa = () => {
  // uuendaKogus(kogus +1);
  if (inputiLuger.current.value === "") {
    uuendaSonum("Tühja nimetusega toodet ei saa lisada!");
  } else { 
    uuendaSonum("Toode lisatud! " + inputiLuger.current.value);
    tooted.push({
      "nimi":inputiLuger.current.value,
      "hind":Number(hindRef.current.value),
      "pilt":piltRef.current.value,
      "aktiivne":aktiivneRef.current.checked,
    });
    inputiLuger.current.value = "";
  }
 }

  return (
    <div>
      {sonum} <br />
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <label>Uue toote hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Uue toote pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Uue toote aktiivne</label> <br />
      <input ref={aktiivneRef} type="checkbox" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
      {/* <button onClick={() => lisa()}>Sisesta</button> <br /> */}
    </div>
  )
}

export default LisaToode