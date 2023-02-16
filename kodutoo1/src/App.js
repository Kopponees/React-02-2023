import {Link, Routes, Route} from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';

function App() {
  return (
  <div>
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