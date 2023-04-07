import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import AstuLiikmeks from './pages/AstuLiikmeks';
import EPood from './pages/EPood';
import Meist from './pages/Meist';
import Uudised from './pages/Uudised';
import Sepikojad from './pages/Sepikojad';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MeieSepad from './pages/MeieSepad';
import Ajalugu from './pages/Ajalugu';


function App() {

  return (<div className="App">

      <Navbar bg="dark" variant="dark">
        <Container style={{ display: "flex", alignItems: "center" }}>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/favicon.ico"
              width="110"
              height="80"
              className="d-inline-block align-top"
            />{' '}
          
            <Link to=""><button className="avalehtNupud">Avalehele</button></Link>
            <Link to="/epood"><button className="avalehtNupud">E-pood</button></Link>
            <Link to="/kontakt"><button className="avalehtNupud">Kontakt</button></Link>
            <NavDropdown className="avalehtNupud"
              id="nav-dropdown-dark-example"
              title="Meist"
              menuVariant="dark"
            >
              <NavDropdown.Item  href="meist">Meist</NavDropdown.Item>
              <NavDropdown.Item  href="meiesepad">Meie sepad</NavDropdown.Item>
              <NavDropdown.Item  href="ajalugu">Ajalugu</NavDropdown.Item>
            </NavDropdown>
            <Link to="/uudised"><button className="avalehtNupud">Uudised</button></Link>
            <Link to="/sepikojad"><button className="avalehtNupud">Sepikojad</button></Link>
            <Link to="/astuliikmeks"><button className="avalehtNupud">Astu liikmeks</button></Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Routes>
        <Route path="" element={<Avaleht />} />
        <Route path="epood" element={<EPood />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="meist" element={<Meist />} />
        <Route path="uudised" element={<Uudised />} />
        <Route path="sepikojad" element={<Sepikojad />} />
        <Route path="astuliikmeks" element={<AstuLiikmeks />} />
        <Route path="meiesepad" element={<MeieSepad />} />
        <Route path="ajalugu" element={<Ajalugu />} />
      </Routes>


  </div>
  );
}

export default App;
