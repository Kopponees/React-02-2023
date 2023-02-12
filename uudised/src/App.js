import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Uudised from './pages/Uudised';
import Meist from './pages/Meist';

function App() {
  return (
    <div> 
      <Link to='/'>
        <button className="avalehtnupp">Avalehele</button>
      </Link>
      <Link to='/uudised'>
        <button className="uudistenupp">Uudiste lehele</button>
      </Link><Link to='/kontakt'>
        <button className="kontaktnupp">Võta meiega ühendust</button>
      </Link><Link to='/meist'>
        <button className="meistnupp">Info meist</button>
      </Link>
      <Routes>
        <Route path='' element={ <Avaleht /> }  />
        <Route path='uudised' element={ <Uudised />}  />
        <Route path='kontakt' element={ <Kontakt />}  />
        <Route path='meist' element={ <Meist /> }  />
            </Routes>
    </div>
  );
}

export default App;
