import React from 'react'

function Meist() {
  return (
    <div>
      Meie email: {localStorage.getItem("email")} <br />
      Meie telefon: {localStorage.getItem("telefon")} <br />
      Meie aadress: {localStorage.getItem("aadress")} <br />
    </div>
  )
}

export default Meist