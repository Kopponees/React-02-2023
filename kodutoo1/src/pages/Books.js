import React, { useState } from 'react'
import booksFailist from '../books.json';

function Books() {

    const [books, uuendaBooks] = useState (booksFailist);
 
    const sorteeriEsimeneTahtAZ = () => {
    books.sort((a,b) => a.charAt(0).localeCompare(b.charAt(0)));
    uuendaBooks(books.slice());
    }
    const sorteeriZA = () => {
        books.sort((a, b)=> b.localeCompare(a));
            uuendaBooks(books.slice());
    }
        
    const sorteeriPikemadEtte = () => {
        books.sort((a, b) => b.length - a.length);
        uuendaBooks(books.slice());
    }
    const sorteeriSonadeArvuJargi = () => {
        books.sort((a, b) => a.split(' ').length - b.split(' ').length);
        uuendaBooks(books.slice());
    }

    const filtreeriThegaAlgavad = () => {
const tulem = books.filter(element => element.startsWith("The"));
uuendaBooks(tulem);
    }

    const filtreeriKeskelAnd = () => {
const tulem = books.filter(element => element.includes("and"));
uuendaBooks(tulem);
    }
    const filtreeri10TahemargigaSonad = () => {
const tulem = books.filter(element => element.length > 10);
uuendaBooks(tulem);
    }
    const filtreeriAlla7Tahemargiga = () => {
        const tulem = books.filter(element => element.length < 7);
        uuendaBooks(tulem);
    }
    const originaaliTagasi = () => {
        uuendaBooks(booksFailist);
    }
    const asendaTahedVaikesteks = () => {
        const tulem = books.map(element => element.toLowerCase());
        uuendaBooks(tulem);
    }
    const asendaTahedSuurteks = () => {
        const tulem = books.map(element => element.toUpperCase());
        uuendaBooks(tulem);
    }
    const asendaPaneLõppuPunkt = () => {
        const tulem= books.map(element => element + ".");
            uuendaBooks(tulem);}
    
    const asendaPaneLõppuHüüumärk = () => {
        const tulem= books.map(element => element + "!");
        uuendaBooks(tulem);
    }
    

    return (
    <div>
        <br />
         <button onClick={sorteeriEsimeneTahtAZ}>Sorteeri esimese tähe järgi</button>
         <button onClick={sorteeriZA}>Sorteeri Z-A</button>
         <button onClick={sorteeriPikemadEtte}>Sorteeri pikemad sõnad ette</button>
         <button onClick={sorteeriSonadeArvuJargi}>Sorteeri sõnade arvu järgi</button>
         <br />
         <button onClick={filtreeriThegaAlgavad}>Jäta alles "The" ga algavad</button>
         <button onClick={filtreeriKeskelAnd}>Jäta alles "and" ga elemendid</button>
         <button onClick={filtreeri10TahemargigaSonad}>Jäta alles üle 10 tähelised</button>
         <button onClick={filtreeriAlla7Tahemargiga}>Jäta alles alla 7 tähelised</button>
         <br />
        
         <br />
        <button onClick= {asendaTahedVaikesteks}>Tähed väikesteks</button>
        <button onClick= {asendaTahedSuurteks}>Tähed suurteks</button>
        <button onClick= {asendaPaneLõppuPunkt}>Lõppu punkt</button>
        <button onClick= {asendaPaneLõppuHüüumärk}>Lõppu hüüumärk</button>
        <br />
         <button onClick ={originaaliTagasi}>Originaali tagasi</button> 
         {books.map(element => <div>{element}</div> )}
       
    </div>
  )
    }


export default Books