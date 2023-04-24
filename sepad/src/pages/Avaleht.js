import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Avaleht() {
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="sepajoonistus.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="avalehttekst">
          <h3>Seppade festival Saaremaal, 5-6.august 2023</h3>
          <div> Kõik sepad kogunegem!</div> <div> On aeg raud kuumaks lasta ja lärmi teha! Ees on suursugune seppade festival, kust ei
            puudu ei tants, ei trall ega ka rauatagumine.</div> <div> Pange endale kuupäev kirja ja olge kohal! Kohtumiseni Kuressaares!
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="sepatööriistad.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="avalehttekst">
        <h3>Eesti Seppade Ühenduse konverents 2023</h3>
          <div>Tulemas on ajaloo suurim Eestis toimunud seppadele suunatud konverents.</div> <div>Konverents toimub Vana-Vigalas, 7-9.mai.</div> <div> 
            Registreerumine www.eestiseppadeuhendus.ee/konverents
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="sepikoda.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="avalehttekst">
        <h3>Paju sepikoda otsib selli!</h3>
          <div> Paju sepikoda Saaremaal põliste saarlaste keskel, otsib enda hulka ühte hakkajat selli,</div> <div> Hea võimalus algajatele seppadele!</div> <div> Rohkem infot www.pajusepad.ee/jobs
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Avaleht