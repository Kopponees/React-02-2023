import React, {useState} from 'react';
import nimedFailist from '../nimed.json';
import {useRef} from 'react';

function TagasisideAndjad() {
    const [tagasisideAndjad, muudaTagasisideAndjad] = useState(nimedFailist);

    function kustuta(index) {
        tagasisideAndjad.splice(index,1);
        muudaTagasisideAndjad(tagasisideAndjad.slice());
    }    
    

    const filtreeriMgaAlgavad= () => {
        const tulem =  tagasisideAndjad.filter(element => element.startsWith("M"));
         muudaTagasisideAndjad(tulem);
     }
     const filtreeri6Kohalised= () => {
        const tulem =  tagasisideAndjad.filter(element => element.length === 6);
             muudaTagasisideAndjad(tulem);
     }
     const filtreeriYLoppevad= () => {
        const tulem =  tagasisideAndjad.filter(element => element.endsWith("y"));
         muudaTagasisideAndjad(tulem);
     }

     const sorteeriZA = () => {
        tagasisideAndjad.sort((a, b)=> b.localeCompare(a));
        muudaTagasisideAndjad(tagasisideAndjad.slice());
}
const asendaESTNimeEtte = () => {
    const tulem= tagasisideAndjad.map(element=>"EST" + element);
    muudaTagasisideAndjad(tulem);}


const andjadRef = useRef();

const lisa = () => {
    tagasisideAndjad.push(andjadRef.current.value);
    muudaTagasisideAndjad(tagasisideAndjad.slice());
    }

   
   


  return (
    <div>
        <div>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <br />
        <button onClick={filtreeriMgaAlgavad}>Filtreeri M tähega nimed</button>
        <button onClick={filtreeri6Kohalised}>Filtreeri 6 tähelised nimed</button>
        <button onClick={filtreeriYLoppevad}>Filtreeri y-ga lõppevad nimed</button>
        <br />
        <button onClick={asendaESTNimeEtte}>Nimede ette EST</button>
        </div>
         <div>{tagasisideAndjad.length} tk</div> 
        {tagasisideAndjad.map((element, index) =>
        <div>
            <span>{element}</span>
            <button onClick={() => kustuta(index)}>X</button>
        </div>)}
 {tagasisideAndjad.map(element => <div key={element}>{element}</div>)}
   
    <label>Uus nimi kõige lõppu</label> <br />
    <input ref={andjadRef} type="text" /> <br />
    <button onClick={lisa}>Lisa nimi</button>
    </div>
  )
}

export default TagasisideAndjad;