import React, {useState} from 'react'


function Meist() {
const [kontakt, n2itaKontakt] = useState("");
const tootajad = [
  {nimi: "Arvo Pärt", ala: "Uudisklippide taustamuusika", telefon:"+37256575859"},
  {nimi:"Sanna Kalevala", ala:"Spordiuudiste loovjuht", telefon:"+37254535251"},
  {nimi:"Leila Matveia", ala:"Koristaja", telefon:"+37259585756"},
  {nimi:"Oskar Koll", ala:"Sekretär-Asjaajaja", telefon:"+37251525354"}
]
const [valitud, uuendaValitud] = useState("");

const v6taYhendust = (tootaja) => {
  n2itaKontakt(tootaja.telefon);
  uuendaValitud(tootaja.nimi);
}

  return ( <div className="kontaktTekst">
<div>See on meist leht!</div>
<div>Meie töötajad:</div>
{/* VALITUD INIMENE:{valitud} */}
<br />
<div>{tootajad.map(tootaja =>
  <div className={tootaja.nimi === valitud ? "Valitud" : undefined}>
    <div>{tootaja.nimi}</div>
    <div>{tootaja.ala}</div>
    <button className="buttonMeist"onClick={() => v6taYhendust(tootaja)}>Võta ühendust!</button>
    <br /><br />
  </div>)}
  </div>
  {kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
</div>);
}

export default Meist