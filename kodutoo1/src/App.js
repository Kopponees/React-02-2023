import {Link, Routes, Route} from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';
import {useRef, useState} from 'react';

function App() {
const[sisseLogitud, muudaSisseLogitud] = useState("ei");
const[sonum, muudaSonum] = useState("");

const kasutajaNimiRef = useRef();
const paroolRef = useRef();

const logiSisse = () => {
  if (paroolRef.current.value === "123") {
  muudaSisseLogitud("jah");
  muudaSonum(kasutajaNimiRef.current.value + ", oled sisselogitud"); 
} else {
  muudaSonum("Vale parool");
  }
}
const logiValja =() =>{
  muudaSisseLogitud("ei");
  muudaSonum("");
  
}

  return (
  <div className="App">
    <div>{sonum}</div>
    { sisseLogitud === "ei" && <div>
     <label>Kasutajanimi</label> <br />
     <input ref={kasutajaNimiRef} type="text" /> <br />
     <label>Parool</label> <br />
     <input ref={paroolRef} type="password" /> <br />
    </div>}
    
   { sisseLogitud === "ei" && <button className="logisissenupp" onClick={logiSisse}>Logi sisse</button> }
    { sisseLogitud === "jah" && <button className="logiv2ljanupp" onClick={logiValja}>Logi välja</button> }
  <br />
  <br />
  
  <Link to="/">
    <button>Avaleht</button>
  </Link>
  <Link to="meist">
    <button>Meist</button>
  </Link>
  <Link to="kontakt">
    <button>Kontakt</button>
  </Link>
<Routes>
  <Route path="/" exact element={ <Avaleht />} />
  <Route path="meist" exact element={<Meist />} />
  <Route path="kontakt" exact element={<Kontakt />} />
  <Route path="seaded" exact element={<Seaded />} />
  
</Routes>
 </div>
    
    
  );
}

export default App;