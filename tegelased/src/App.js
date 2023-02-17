import {Link, Routes, Route} from 'react-router-dom'
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaTegelane from './pages/LisaTegelane';
import Valitudtegelased from './pages/Valitudtegelased';

function App() {
  return(
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="lisa-tegelane">
        <button>Tegelase lisamine</button>
      </Link>
      <Link to="vali-tegelane">
        <button>Tegelase valimine</button>
      </Link>
      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="lisa-tegelane" element={<LisaTegelane />} />
        <Route path="vali-tegelane" element={<Valitudtegelased />} />
      </Routes>
    </div>
  );
  
   
}

export default App;
