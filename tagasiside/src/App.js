import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button></Link>
        <Link to="tagasiside">
        <button>tagasisidede lehele</button></Link>
        <Link to="tagasisideandjad">
        <button>tagasisidede andjate lehele</button></Link>

        <Routes>
          <Route path="/" element={<div>Avaleht</div>} />
          <Route path="tagasiside" element={<Tagasiside/>} />
          <Route path="tagasisideandjad" element={<TagasisideAndjad/>} />
        </Routes>
    </div>
  );
}

export default App;
