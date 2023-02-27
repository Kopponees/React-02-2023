import React, { useState } from 'react'


function Ilmumine() {
    const [n2itaLisainfot, uuendaN2itaLisainfot] = useState(false);

  return (
    <div>
        <div className="näita" onClick={() => uuendaN2itaLisainfot(!n2itaLisainfot)}>
            Sooduskoodi sisestamine ja makse arvutuskäik
            <br />
            {n2itaLisainfot === true && <span>Näita vähem</span>}
            {n2itaLisainfot === false && <span>Näita rohkem</span>}
            </div>
            {n2itaLisainfot === true && <div>Tellitavad tooted ja teenused
                Lisatud teenused
                <br />
                Family pakett
                Soodustus kuni 29.03.2023
                0,00 €/kuu
                39,00 €/kuu
                <br />
                Videolaenutus
                <br />

                Sisaldub paketis
                FOX NOW
                Sisaldub paketis
                HBO
                Sisaldub paketis
                National Geographic keskkond
                Sisaldub paketis
                Go3 Film / Paramount+
                Sisaldub paketis
                Lastenurk
                Sisaldub paketis
                Setanta Sportsi äpp
                Sisaldub paketis
                5 ekraani
                Sisaldub paketis
                Inspira +
                Sisaldub paketis
                Salvestamine
                Sisaldub paketis
        </div>}
    </div>
  )
}

export default Ilmumine