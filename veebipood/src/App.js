import './App.css';
import { Link, Route, Routes} from 'react-router-dom';
import  Avaleht  from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';


function App() {
  return (
  <div className="App">
    <Link to="/">
      <img className="pilt" src="https://th.bing.com/th/id/R.e258b3e684127adafbdfcf680c7ce64d?rik=wsZtiR2zhs1GdQ&riu=http%3a%2f%2fcartype.com%2fpics%2f11525%2ffull%2fnobe_100_18_4.jpg&ehk=FTKoL5z2dUr36X6Hy0McetnzuqaRRYOzDXypqf0F1MI%3d&risl=&pid=ImgRaw&r=0" alt="" />
    </Link>
   <button className="nupp">Nupp</button>

   <Link to="/ostukorv">
   <button className="nupp">Nupp</button>
  </Link>

  <Link to="/lisa-toode">
   <button className="nupp">Nupp</button>
  </Link>

{/* <localhost:3000/ */}
<Routes>
  <Route path="" element={ <Avaleht /> } />
  <Route path="ostukorv" element={ <Ostukorv />} />
  <Route path="lisa-toode" element={ <LisaToode />} />
</Routes>

    </div>
  );
}

export default App;
