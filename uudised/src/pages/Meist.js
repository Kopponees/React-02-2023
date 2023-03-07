import React, {useState} from 'react'


function Meist() {
const [kontakt, n2itaKontakt] = useState("");
const tootajad = [
  {nimi: "Arvo Pärt", ala: "Uudisklippide taustamuusika", telefon:"+37256575859"},
  {nimi:"Sanna Kalevala", ala:"Spordiuudiste loovjuht", telefon:"+37254535251"},
  {nimi:"Leila Matveia", ala:"Koristaja", telefon:"+37259585756"},
  {nimi:"Oskar Koll", ala:"Sekretär-Asjaajaja", telefon:"+37251525354"}
]


  return ( <div className="kontaktTekst">
<div>See on meist leht!</div>
<div>Meie töötajad:</div>
<br />
<div>{tootajad.map(tootaja =>
  <div>
    <div>{tootaja.nimi}</div>
    <div>{tootaja.ala}</div>
    <button onClick={() => n2itaKontakt(tootaja.telefon)}>Võta ühendust!</button>
    <br /><br />
  </div>)}
  </div>
  {kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
</div>);
}

export default Meist