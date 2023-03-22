import './App.css';
import { Link, Route, Routes} from 'react-router-dom';
import HomePage from './pages/public/HomePage';
import Cart from './pages/public/Cart';
import Shops from './pages/public/Shops';
import {ContactUs} from './pages/public/ContactUs';
import AdminHome from './pages/admin/AdminHome';
import AddProducts from './pages/admin/AddProducts';
import EditProducts from './pages/admin/EditProducts';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainShops from './pages/admin/MaintainShops';
import MaintainCategories from './pages/admin/MaintainCategories';
import SingleProduct from './pages/admin/SingleProduct';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const updateLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language",newLang);
  }
  
  

  return (
    <div className="App">
      

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">My webshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin" >{t("admin")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
          </Nav>
          <img className="lang" src="/english.png" alt="" onClick={() => updateLang("en")}/>
          <img className="lang" src="/estonian.png" alt="" onClick={() => updateLang("ee")}/>
        
        </Container>
      </Navbar>

     <Routes>
      <Route path="" element= {<HomePage /> } />
      <Route path="cart" element= {<Cart /> } />
      <Route path="shops" element= {<Shops /> } />
      <Route path="contact" element= {<ContactUs /> } />
      <Route path="admin" element= {<AdminHome /> } />
      <Route path="admin/add-product" element= {<AddProducts /> } />
      <Route path="admin/edit-product/:id" element= {<EditProducts /> } />
      <Route path="admin/maintain-products" element= {<MaintainProducts /> } />
      <Route path="admin/maintain-shops" element= {<MaintainShops /> } />
      <Route path="admin/maintain-categories" element= {<MaintainCategories /> } />
      <Route path="product/:id" element= {<SingleProduct /> } />
     </Routes>
          
    </div>
  );
}

export default App;
