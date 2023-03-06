import React, {useState} from 'react';
import poedFailist from '../data/poed.json';

function Poed() {
    const [poed, uuendaPoed] = useState(poedFailist);

    const originaaliTagasi = () => {
        uuendaPoed(poedFailist);
    }

    const sorteeriAZ= () => {
       // poed.sort();
        poed.sort((a, b) => a.nimi.localeCompare(b.nimi));
        uuendaPoed(poed.slice());
    }

        const sorteeriZA= () => {
            poed.sort((a, b)=> b.nimi.localeCompare(a.nimi));
            uuendaPoed(poed.slice());
    }
        const sorteeriTahedKasvavalt = () => {
            poed.sort((a, b) => a.nimi.length - b.nimi.length); // sõna pikkuse järgi järjestatud(lühemast pikemaks)
            uuendaPoed(poed.slice());
        }

        const sorteeriTahedKahanevalt = () => {
            poed.sort((a, b) =>  b.nimi.length - a.nimi.length); // sõna pikkuse järgi(pikemast lühemaks)
            uuendaPoed(poed.slice());
        }

        const sorteeriKolmasTahtAZ = () => {
            poed.sort((a, b) => a.nimi.charAt(2).localeCompare(b.nimi.charAt(2)));
            uuendaPoed(poed.slice());
        }

        const filtreeriEgaLoppevad = () => {
           const tulem =  poed.filter(yksPood => yksPood.nimi.endsWith("e"));
            uuendaPoed(tulem);
        }

        const filtreeriRohkemtahtiKui7 = () => {
            const tulem =  poed.filter(yksPood => yksPood.nimi.length > 7);
             uuendaPoed(tulem);
        }
        const filtreeriSisaldabTahtiIS = () => {
            const tulem =  poed.filter(yksPood => yksPood.nimi.includes("is"));
             uuendaPoed(tulem);
        }
        const filtreeriKolmasTahtI = () => {
            const tulem =  poed.filter(yksPood => yksPood.nimi.charAt(2) ==="i");
             uuendaPoed(tulem);
        }
        const filtreeriTahti9 = () => {
            const tulem =  poed.filter(yksPood => yksPood.nimi.length === 9);
             uuendaPoed(tulem);
        }

        //asendamine



        const asendaSuurteks = () => {
            const tulem = poed.map(yksPood => {return{"nimi":yksPood.nimi.toUpperCase(), "tel": yksPood.tel}});
            uuendaPoed(tulem);
        }
        const asendaVaikesteks = () => {
             const tulem = poed.map(yksPood =>{return{"nimi":yksPood.nimi.toLowerCase(), "tel": yksPood.tel}});
            uuendaPoed(tulem);}

        const asendaKriipsudEtte = () => {
            const tulem= poed.map(yksPood=>{return{"nimi":"--" + yksPood.nimi, "tel": yksPood.tel}});
            uuendaPoed(tulem);}
    
        const asendaTagurpidi = () => {
            const tulem= poed.map(yksPood=> {return{"nimi": yksPood.nimi.split("").reverse().join(""), "tel": yksPood.tel}});
            uuendaPoed(tulem);    
        }
        const asendaITahtOga= () => {
            const tulem= poed.map(yksPood => {return{"nimi":yksPood.nimi.replaceAll("i", "o"), "tel": yksPood.tel}});
            uuendaPoed(tulem);  
        }
            
    
    

  return (
    <div>
         <button onClick={originaaliTagasi}>Originaali tagasi</button>
        <br />
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähtede arv kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähtede arv kahanevalt</button>
        <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
        <br /> <br />
        <button onClick={filtreeriEgaLoppevad}> Filtreeri E-ga lõppevad</button>
        <button onClick={filtreeriRohkemtahtiKui7}> Filtreeri üle 7 tähelised</button>
        <button onClick={filtreeriSisaldabTahtiIS}> Sisaldab tähti I ja S</button>
        <button onClick={filtreeriKolmasTahtI}> Kolmas täht I</button>
        <button onClick={filtreeriTahti9}>Tähti 9</button>
        <br /><br />
        <button onClick={asendaSuurteks}>Pane kõik suurteks tähtedeks</button>
        <button onClick={asendaVaikesteks}>Pane kõik väikesteks tähtedeks</button>
        <button onClick={asendaKriipsudEtte}>Pane kõigile -- ette</button>
        <button onClick={asendaTagurpidi}>Kirjuta kõik tagurpidi</button>
        <button onClick={asendaITahtOga}>Asenda kõigil I täht O tähega</button>
       
        <div>{poed.length} tk</div>   


        {poed.map(yksPood => <div key={yksPood.nimi}>{yksPood.nimi} - {yksPood.tel}</div> )}
        <div>---------------------</div>
        <div>Ülemiste</div>
        <div>Viimsi</div>
        <div>Rocca Al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
        <div>Järveotsa</div>
    </div>
  )
}

export default Poed