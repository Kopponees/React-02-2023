import React from 'react'

function Uudised() {
  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

  return (
    <div className="uudisedtekstid">
        <div>Eesti Seppade Ühenduse uudised</div>
        <br />
        {uudised.length === 0 && <div>Ühtegi uudist hetkel pole! Lisame õigepea.</div>}
        <div>{uudised.map(uudis => <div>{uudis}</div>)}</div>
    </div>
  )
}

export default Uudised