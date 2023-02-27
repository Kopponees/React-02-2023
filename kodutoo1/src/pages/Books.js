import React, { useState } from 'react'

function Books() {

    const [books, uuendaBooks] = useState (["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Come as you are", "High perfomance habits"]);
 
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
    

    return (
    <div>
        <br />
         <button onClick={sorteeriEsimeneTahtAZ}>Sorteeri esimese tähe järgi</button>
         <button onClick={sorteeriZA}>Sorteeri Z-A</button>
         <button onClick={sorteeriPikemadEtte}>Sorteeri pikemad sõnad ette</button>
         {books.map(element => <div>{element}</div> )}
       
    </div>
  )
    }


export default Books