import React, {useState} from 'react';
import joogidFailist from '../joogid.json';

function HaldaJooke() {

    const[joogid, uuendaJoogid] = useState(joogidFailist);

    

   

    function kustuta(index){
    joogid.splice(index,1);
    uuendaJoogid(joogidFailist.slice());
}

  return (
    <div>
        {joogid.map((element, index) =>
        <div>
            {element} <button onClick={() => kustuta(index)}>X</button></div>)}
   
    </div>
  )
}

export default HaldaJooke