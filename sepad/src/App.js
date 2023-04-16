import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import AstuLiikmeks from './pages/AstuLiikmeks';
import EPood from './pages/EPood';
import Meist from './pages/Meist';
import Uudised from './pages/Uudised';
import Sepikojad from './pages/Sepikojad';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Ostukorv from './pages/Ostukorv';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MeieSepad from './pages/MeieSepad';
import Ajalugu from './pages/Ajalugu';
import { useEffect, useState } from 'react';


  function App() {
    const [n2itaMeist, muudaN2itaMeist] = useState(false);
    const { t, i18n } = useTranslation();

    const updateLang = (newLang) => {
      i18n.changeLanguage(newLang);
      localStorage.setItem("language",newLang);
    }
    useEffect(() => {
      const lang = localStorage.getItem("language");
      if (lang) {
        updateLang(lang);
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
        <Navbar 
        className="navbar navbar-expand-lg"  bg="dark" variant="dark">
          <Container style={{ display: "flex", alignItems: "center", width:"100%" }}>
            <Navbar.Brand href="/">
              <img
                alt=""
                src="/favicon.ico"
                width="110"
                height="80"
                className="d-inline-block align-top"
              />{' '}
            
              <Link to="/epood"><button className="avalehtNupud">{t("epood")}</button></Link>
              <Link to="/ostukorv"><button className="avalehtNupud">{t("ostukorv")}</button></Link>
              <Link to="/kontakt"><button className="avalehtNupud">{t("kontakt")}</button></Link>
              <NavDropdown className="avalehtNupud"
                id="nav-dropdown-dark-example"
                title={t("meist")}
                menuVariant="dark"
                show={n2itaMeist}
                onMouseEnter={hiirPeal}
                onMouseLeave={hiirLahkub}
              >
                <NavDropdown.Item className="meistnupud" href="meist">{t("meist")}</NavDropdown.Item>
                <NavDropdown.Item className="meistnupud" href="meiesepad">{t("meiesepad")}</NavDropdown.Item>
                <NavDropdown.Item className="meistnupud" href="ajalugu">{t("ajalugu")}</NavDropdown.Item>
                <NavDropdown.Item className="meistnupud" href="sepikojad">{t("sepikojad")}</NavDropdown.Item>
              </NavDropdown>
              <Link to="/uudised"><button className="avalehtNupud">{t("uudised")}</button></Link>
              <Link to="/astuliikmeks"><button className="avalehtNupud">{t("astuliikmeks")}</button></Link>
              <img className="lang" src="/english.png" alt="" onClick={() => updateLang("en")}/>
              <img className="lang" src="/estonian.png" alt="" onClick={() => updateLang("ee")}/>
              <img className="lang" src="/russian.png" alt="" onClick={() => updateLang("ru")}/>
            </Navbar.Brand>
          </Container>
        </Navbar>

      <Routes>
        <Route path="" element={<Avaleht />} />
        <Route path="epood" element={<EPood />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="ostukorv" element={<Ostukorv />} />
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
