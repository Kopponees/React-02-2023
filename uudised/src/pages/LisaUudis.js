import {useRef} from 'react';

function LisaUudis () {
    const uudiseRef= useRef();
    const lisaUusUudis= () => {
        let uudised = localStorage.getItem("uudised");
        uudised = JSON.parse(uudised) || [];
        uudised.push(uudiseRef.current.value);
        uudised = JSON.stringify(uudised);
        localStorage.setItem("uudised", uudised);
    }
    
    return ( 
    <div>
        <label className="uudisenimitekst">Uudise nimi:</label> <br />
        <input ref={uudiseRef} type="text" /> <br />
        <button onClick={() => lisaUusUudis()}>Lisa uudis</button> <br />
    </div> );
}

export default LisaUudis;