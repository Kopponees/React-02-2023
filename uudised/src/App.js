import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Uudised from './pages/Uudised';
import Meist from './pages/Meist';
import Tegevused from './pages/Tegevused';

function App() {
  return (
    <div> 
      <Link to='/'>
        <button className="avalehtnupp">Avalehele</button>
      </Link>
      <Link to='/uudised'>
        <button className="uudistenupp">Uudiste lehele</button>
      </Link>
      <Link to='/kontakt'>
        <button className="kontaktnupp">Võta meiega ühendust</button>
      </Link>
      <Link to='/meist'>
        <button className="meistnupp">Info meist</button>
      </Link>
      <Link to='/tegevused'>
        <button className="tegevusednupp">Vaata, mis ülesandeid veel tegema pead</button>
      </Link>
      
      
      <Routes>
        <Route path='' element={ <Avaleht /> }  />
        <Route path='uudised' element={ <Uudised />}  />
        <Route path='kontakt' element={ <Kontakt />}  />
        <Route path='meist' element={ <Meist /> }  />
        <Route path='tegevused' element={ <Tegevused /> }  />
            </Routes>
    </div>
  );
}

export default App;
