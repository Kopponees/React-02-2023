import {Route, Routes, Link, Navigate} from 'react-router-dom';
import './App.css';
import Ilmumine from './pages/Ilmumine';
import Kujundus from './pages/Kujundus';
import Muutmine from './pages/Muutmine';
import Array from './pages/Array';

function App() {
  return (
    <div className="App">

      <Link to="/ilmumine"><button>Ilmumine</button></Link>
      <Link to="/kujundus"><button>Kujundus</button></Link>
      <Link to="/muutmine"><button>Muutmine</button></Link>
      <Link to="/array"><button>Array</button></Link>

     <Routes>
      <Route path="/" element={<Navigate to="/ilmumine" />} />
      <Route path="/ilmumine" element={ <Ilmumine /> } />
      <Route path="/kujundus" element={ <Kujundus /> } />
      <Route path="/muutmine" element={ <Muutmine /> } />
      <Route path="/array" element={ <Array /> } />
     </Routes>
    </div>
  );
}

export default App;
