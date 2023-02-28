import React, {useState} from 'react';
import numbridFailist from '../numbrid.json';

function Numbrid() {

    const [numbrid, uuendaNumbrid] = useState(numbridFailist);

    const originaaliTagasi = () => {
        uuendaNumbrid(numbridFailist);
    }
    
    const sorteeriEsimeseJargi = () => {
        numbrid.sort((a, b) => a.toString().charAt(0).localeCompare(b.toString().charAt(0)));
        uuendaNumbrid(numbrid.slice());
    }
    const sorteeriEsimeseJargiTagurpidi = () => {
        numbrid.sort((a, b) => b.toString().charAt(0).localeCompare(a.toString().charAt(0)));
        uuendaNumbrid(numbrid.slice());
    }
    const sorteeriSuurusejargiKasvavalt = () => {
        numbrid.sort((a, b) => a-b);
        uuendaNumbrid(numbrid.slice());
    }
    const sorteeriSuurusejargiKahanevalt = () => {
        numbrid.sort((a, b) => b-a);
        uuendaNumbrid(numbrid.slice());
    }
    const filtreeriSuuremadKui8 = () => {
        const tulem = numbrid.filter(element => element > 8 );
         uuendaNumbrid(tulem);
    }
    const filtreeriVaiksemadKui10 = () => {
        const tulem= numbrid.filter(element => element < 10 );
         uuendaNumbrid(tulem);
    }
    const filtreeriPaarisArvud = () => {
        const tulem = numbrid.filter(element => element % 2 === 0);
         uuendaNumbrid(tulem);
    }
    const filtreeriPaaritudArvud = () => {
        const tulem = numbrid.filter(element => element % 2 !== 0);
         uuendaNumbrid(tulem);
    }
     const asendaKorrutaKoikKahega = () => {
        const tulem = numbrid.map(x => x * 2);
        uuendaNumbrid(tulem);
     }
     const asendaJagaKoikKolmega = () => {
        const tulem = numbrid.map(x => x / 3);
        uuendaNumbrid(tulem);
     }
     const asendaLiida10 = () => {
        const tulem = numbrid.map(x => x + 10);
        uuendaNumbrid(tulem);
     }
     const asendaLahuta1 = () => {
        const tulem = numbrid.map(x => x - 1);
        uuendaNumbrid(tulem);
     }

       

  return (
    <div>
        <button onClick={sorteeriEsimeseJargi}>Sorteeri esimese numbri järgi</button>
        <button onClick={sorteeriEsimeseJargiTagurpidi}>Sorteeri esimese numbri järgi tagurpidi</button>
        <button onClick={sorteeriSuurusejargiKasvavalt}>Sorteeri esimese numbri järgi</button>
        <button onClick={sorteeriSuurusejargiKahanevalt}>Sorteeri esimese numbri järgi</button>
        <br />
        <button onClick={filtreeriSuuremadKui8}>Filtreeri suuremad,kui 8</button>
        <button onClick={filtreeriVaiksemadKui10}>Filtreeri väiksemad, kui 10</button>
        <button onClick={filtreeriPaarisArvud}>Filtreeri paaris arvud</button>
        <button onClick={filtreeriPaaritudArvud}>Filtreeri paaritud arvud</button>
        <br />
        <button onClick ={originaaliTagasi}>Originaali tagasi</button> 
        <br />
        <button onClick = {asendaKorrutaKoikKahega}>Korruta kõik kahega</button>
        <button onClick = {asendaJagaKoikKolmega}>jaga kõik kolmega</button>
        <button onClick = {asendaLiida10}>Liida igaühele 10 juurde</button>
        <button onClick = {asendaLahuta1}>Lahuta igaühelt 1</button>
        {numbrid.map(element => <div>{element}</div> )}
    </div>
  )
}

export default Numbrid