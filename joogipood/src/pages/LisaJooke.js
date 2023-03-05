import React, {useRef} from 'react';
import joogidFailist from '../joogid.json';

function LisaJooke() {
    
    const jookRef = useRef();

    const lisaUusJook = () => {
        joogidFailist.push(jookRef.current.value);
        

    }

  return (
    <div>
    <label>lisa jook</label>
    <input ref={jookRef}type="text" />
    <button onClick={() => lisaUusJook()}>Sisesta</button></div>
  )
}

export default LisaJooke