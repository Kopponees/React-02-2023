import React, { useState } from 'react'
import sepadFailist from '../data/sepad.json'

function MeieSepad() {
const [sepad] = useState(sepadFailist);
  return (
    <div>
      <div>{sepad.map((element) => 
      <div>
        <div>{element.name}</div>
        <img src={element.image} alt="" />
        <div>{element.profile}</div>
      </div>
       ) }</div>
      
    </div>
  )
}

export default MeieSepad