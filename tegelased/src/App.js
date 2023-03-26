import {Link, Routes, Route} from 'react-router-dom'
import './App.css';
import Avaleht from './pages/Avaleht';
import TegelaseLisamine from './pages/TegelaseLisamine';
import Valitudtegelased from './pages/Valitudtegelased';

function App() {
  return(
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="vali-tegelane">
        <button>Vali tegelane</button>
      </Link>
      <Link to="tegelase-lisamine">
        <button>Tegelase lisamine</button>
      </Link>
      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="vali-tegelane" element={<Valitudtegelased />} />
        <Route path="tegelase-lisamine" element={<TegelaseLisamine />} />
      </Routes>
    </div>
  );
  
   
}

export default App;
