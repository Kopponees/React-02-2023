import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AstuLiikmeks from './pages/AstuLiikmeks';
import EPood from './pages/EPood';
import Meist from './pages/Meist';
import Sepikojad from './pages/Sepikojad';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Ostukorv from './pages/Ostukorv';
import MeieSepad from './pages/MeieSepad';
import Ajalugu from './pages/Ajalugu';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartSumContext } from './pood/CartSumContext';


function App() {
  const { cartSum } = useContext(CartSumContext);
  const [n2itaMeist, muudaN2itaMeist] = useState(false);
  const { t, i18n } = useTranslation();

  const updateLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  }
  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang) {
      // updateLang(lang);
    }
  }, []);

  const hiirPeal = () => {
    muudaN2itaMeist(true);
  };

  const hiirLahkub = () => {
    muudaN2itaMeist(false);
  };

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img className="favicon" src="favicon.ico" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link className="avalehtnupp"href="/epood">{t("epood")}</Nav.Link>
            <Nav.Link className="avalehtnupp" href="/kontakt">{t("kontakt")}</Nav.Link>
            <NavDropdown className="meistnupp"title={t("meist")} id="collasible-nav-dropdown"
            show={n2itaMeist}
            onMouseEnter={hiirPeal}
            onMouseLeave={hiirLahkub}>
              <NavDropdown.Item href="/meist">{t("meist")}</NavDropdown.Item>
              <NavDropdown.Item href="/ajalugu">
               {t("ajalugu")}
              </NavDropdown.Item>
              <NavDropdown.Item  href="/meiesepad">{t("meiesepad")}</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item  href="/sepikojad">
                {t("sepikojad")}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="avalehtnupp" href="/astuliikmeks">{t("astuliikmeks")}</Nav.Link>
          </Nav>
          <Nav>
            </Nav>
            <div className="cartsum">{cartSum}€</div>
        <Nav.Link href="/ostukorv"><img className="ostukorvnupp"src="ostukorv.png" alt="" /></Nav.Link>
        <img className="lang" src="/english.png" alt="" onClick={() => updateLang("en")} />
            <img className="lang" src="/estonian.png" alt="" onClick={() => updateLang("ee")} />
            <img className="lang" src="/russian.png" alt="" onClick={() => updateLang("ru")} />
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Routes>
        <Route path="" element={<Avaleht />} />
        <Route path="epood" element={<EPood />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="ostukorv" element={<Ostukorv />} />
        <Route path="meist" element={<Meist />} />
        <Route path="sepikojad" element={<Sepikojad />} />
        <Route path="astuliikmeks" element={<AstuLiikmeks />} />
        <Route path="meiesepad" element={<MeieSepad />} />
        <Route path="ajalugu" element={<Ajalugu />} />
      </Routes>

    </div>
  );
}

export default App;
