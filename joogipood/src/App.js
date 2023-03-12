import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaJooke from './pages/LisaJooke';
import HaldaJooke from './pages/HaldaJooke';
import Jook from './pages/Jook';

function App() {
return (<div className="App">


  <Link to="/"><button>Avalehele</button></Link>
  <Link to="/lisa"><button>Lisa Jook lehele</button></Link>
  <Link to="/halda"><button>Halda Jooke lehele</button></Link>
  

  <Routes>
    <Route path="/" element={<Avaleht />} />
    <Route path="/lisa" element={<LisaJooke />} />
    <Route path="/halda" element={<HaldaJooke />} />
    <Route path="jook/:number" element={<Jook />} />
  </Routes>
  
    

    </div>
  );
}

export default App;
