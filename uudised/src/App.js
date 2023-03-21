import './App.css';
import {useState} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Uudised from './pages/Uudised';
import Meist from './pages/Meist';
import Tegevused from './pages/Tegevused';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import LisaUudis from './pages/LisaUudis';


function App() {
  
  const [show, setShow] = useState(true);
  
    const { t, i18n } = useTranslation();
  
    const updateLang = (newLang) => {
      i18n.changeLanguage(newLang);
      localStorage.setItem("language",newLang);
    }

  return (
    <div> 
      <Link to='/'>
        <button className="avalehtnupp">{t("Avalehele")}</button>
      </Link>
      <Link to='/uudised'>
        <button className="uudistenupp">{t("Uudiste lehele")}</button>
      </Link>
      <Link to='/kontakt'>
        <button className="kontaktnupp">{t("Võta meiega ühendust")}</button>
      </Link>
      <Link to='/meist'>
        <button className="meistnupp">{t("Info meist")}</button>
      </Link>
      <Link to='/tegevused'>
        <button className="tegevusednupp">{t("Ülesanded")}</button>
      </Link>
      <Link to='/lisa-uudis'>
        <button className="lisauudisnupp">{t("Lisa uudis")}</button>
      </Link>
      
      
      <Routes>
        <Route path='' element={ <Avaleht /> }  />
        <Route path='uudised' element={ <Uudised />}  />
        <Route path='kontakt' element={ <Kontakt />}  />
        <Route path='meist' element={ <Meist /> }  />
        <Route path='tegevused' element={ <Tegevused /> }  />
        <Route path='lisa-uudis' element={ <LisaUudis /> }  />
            </Routes>
            <img className="lang" src="/english.png" alt="" onClick={() => updateLang("en")}/>
          <img className="lang" src="/estonian.png" alt="" onClick={() => updateLang("ee")}/>
          <img className="lang" src="/russian.png" alt="" onClick={() => updateLang("ru")}/>
          <>
      {show && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oii! Siin on mingi viga!</Alert.Heading>
          <p>
            Proovi ikka asi ise ära lahendada! Küll siis tööle läheb.
          </p>
        </Alert>
      )}
    </>

    </div>
  );
}

export default App;
