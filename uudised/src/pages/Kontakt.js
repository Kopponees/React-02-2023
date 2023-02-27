import React,{useState} from 'react'

function Kontakt() {
  const [n2itaTelVigala,muudaN2itaTelVigala] = useState(false)
  const [n2itaTelKiri, muudaN2itaTelKiri] = useState(false)
  const [n2itaTelSurva, muudaN2itaTelSurva] = useState(false)
  const [n2itaTelReeman, muudaN2itaTelReeman] = useState(false)
  const [email, n2itaEmail] = useState("")

  return (
    <div className="kontakttekstid">
        <div>Kontaktid</div>
        <div>Võta meiega ühendust!</div>
        <br />
        <div  className={n2itaTelVigala === true ? "valitud" : undefined} onClick={() => muudaN2itaTelVigala(true)}>Vana-Vigala Tehnika-ja Teeninduskool <br />
        {n2itaTelVigala && +37258674355}</div>
        <div>Hariduse tn 2, Vana-Vigala, Raplamaa</div>
        { email  !=="" &&<div>Kooli email: {email}</div>} 
        <button className="emailnupp" onClick={() =>n2itaEmail("sepad@sepad.ee")}>kirjuta meile</button>
        <br />
        <br />
        <div>Juhatuse esimehe konkakt </div> 
        <div className={n2itaTelKiri === true ? "valitud" : undefined} onClick={() => muudaN2itaTelKiri(true)}> Joonas Kiri  <br />{n2itaTelKiri && +3725435666} <br /> Kiri@sepad.ee</div>
        <br />
        <div>Ühenduse liikmete kontaktid:</div>
        <div className={n2itaTelSurva === true ? "valitud" : undefined} onClick={() => muudaN2itaTelSurva(true)}>Olav Surva {n2itaTelSurva &&+3725640403}</div> 
        <div className={n2itaTelReeman === true ? "valitud" : undefined} onClick ={() => muudaN2itaTelReeman(true)}>Peeter Reeman {n2itaTelReeman &&+372494959}</div>
        

    </div>
    
  )
}

export default Kontakt