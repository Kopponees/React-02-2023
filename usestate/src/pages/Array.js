import React, {useState} from 'react';
import muutujadFailist from '../muutujad.json';


function Array() {

    const[muutuja, muudaMuutujat] = useState(muutujadFailist);

    const lisaMuutujad = () => {
        const uuedMuutujad = ['chickens', 'cats', 'dogs'];
        muudaMuutujat([...muutuja, ...uuedMuutujad]);
      };

   

    
 
    function kustuta(index) {
        muutuja.splice(index,1);
        muudaMuutujat(muutuja.slice());
    }    


    function kustutaMuutujad() {
        muudaMuutujat([]);}

        const sorteeriAZ= () => {
            muutuja.sort((a,b) => a.localeCompare(b));
            muudaMuutujat(muutuja.slice());
        }

        const filtreeriRohkemKui4Tahelised= () => {
            const tulem= muutuja.filter(element => element.length > 4);
            muudaMuutujat(tulem);
        }

    
 
    return (
    <div>
        <button onClick={kustutaMuutujad}>kustuta kõik</button>
        <br />
        <button onClick={sorteeriAZ}>sorteeri A-Z</button>
        <button onClick={filtreeriRohkemKui4Tahelised}>Jäta alles üle 4 tähelised</button>
        <button onClick={lisaMuutujad}>Lisa 3 elementi</button>
        <div>{muutuja.length} tk</div> 




        
        {muutuja.map((element, index) =>
        <div>
            <span>{element}</span>
            <button onClick={() => kustuta(index)}>X</button>
        </div>)}
    </div>
  )
}

export default Array