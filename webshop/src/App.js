import './App.css';
import { Link, Navigate, Route, Routes} from 'react-router-dom';
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
import { useContext } from 'react';
import { CartSumContext } from './store/CartSumContext';
import Login from './pages/public/Login';
import SignUp from './pages/public/Signup';
import { AuthContext } from './store/AuthContext';

function App() {
  const { cartSum } = useContext(CartSumContext);
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
 


  const { t, i18n } = useTranslation();

  const updateLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language",newLang);
  }
  
  const logout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem("token");
  }
  

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">My webshop</Navbar.Brand>
          <Nav className="me-auto">
            {loggedIn === true && <Nav.Link as={Link} to="/admin" >{t("admin")}</Nav.Link>}
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
            {loggedIn === false && <Nav.Link as={Link} to="/login">{t("login")}</Nav.Link>}
            {loggedIn === false && <Nav.Link as={Link} to="/signup">{t("signup")}</Nav.Link>}
            {loggedIn === true && <Nav.Link onClick={logout}>Logi välja</Nav.Link>}
          </Nav>
          <div>{cartSum}€</div>
          <img className="lang" src="/english.png" alt="" onClick={() => updateLang("en")}/>
          <img className="lang" src="/estonian.png" alt="" onClick={() => updateLang("ee")}/>
          <img className="lang" src="/russian.png" alt="" onClick={() => updateLang("ru")}/>
        
        </Container>
      </Navbar>

     <Routes>
      <Route path="" element= {<HomePage /> } />
      <Route path="cart" element= {<Cart /> } />
      <Route path="shops" element= {<Shops /> } />
      <Route path="contact" element= {<ContactUs /> } />
      
      <Route path="product/:id" element= {<SingleProduct /> } />
      <Route path="login" element= {<Login /> } />
      <Route path="signup" element= {<SignUp /> } />
      {loggedIn === true && <>
      <Route path="admin" element= {<AdminHome /> } />
      <Route path="admin/add-product" element= {<AddProducts /> } />
      <Route path="admin/edit-product/:id" element= {<EditProducts /> } />
      <Route path="admin/maintain-products" element= {<MaintainProducts /> } />
      <Route path="admin/maintain-shops" element= {<MaintainShops /> } />
      <Route path="admin/maintain-categories" element= {<MaintainCategories /> } />
      </> }
      {loggedIn === false && <Route path="admin/*" element={ <Navigate to="/login" /> } /> }
     </Routes>
          
    </div>
  );
}

export default App;
