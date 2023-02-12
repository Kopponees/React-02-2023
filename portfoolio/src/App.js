import './App.css';
import {Link, Route, Routes } from 'react-router-dom'
import Deer from './pages/Deer';
import Giraffe from './pages/Giraffe';
import Bobcat from './pages/Bobcat';



function App() {
  return (
    <div>
      <img className="main-picture" src="https://webneel.com/daily/sites/default/files/images/daily/04-2013/5-elephants-by-ademeit-black-and-white-photography.jpg" alt="" />
      <div className="text">This website is for the living so live it or you are better of dead!</div>
      <div className="rectangle"></div>

      <div className="navigation-pictures">
      <Link className="main-link" to="deer">
      <img src="https://i.pinimg.com/736x/91/79/24/9179245e90d997d040a483ac724241a6--black-and-white-animal-photos-black-and-white-photography-animals.jpg" alt="" />
        <p>Deer habitat</p>
        </Link>
      <Link className="main-link" to="giraffe">
      <img src="https://cdn.trendhunterstatic.com/phpthumbnails/230/230147/230147_6_600.jpeg?auto=webp" alt="" />
        <p>Giraffe habitat</p>
        </Link>
        <Link className="main-link" to="bobcat">
      <img src="https://cdn.trendhunterstatic.com/phpthumbnails/230/230147/230147_1_600.jpeg?auto=webp" alt="" />
      <p>Lynx habitat</p>
      </Link>
      </div>
      <div className="videos">
      <iframe width="260" height="200" src="https://www.youtube.com/embed/PB2vfIo3hBE?start=303" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="260" height="200" src="https://www.youtube.com/embed/ZKL87WUPAks?start=15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="260" height="200" src="https://www.youtube.com/embed/y7fTVT0eez0?start=149" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div><Routes>
      <Route path="deer" element={ <Deer />} />
      <Route path="giraffe" element={ <Giraffe />} />
      <Route path="bobcat" element={ <Bobcat />} />
    </Routes>
    <a className="facebook-button" href="https://www.facebook.com">
      <img src="facebook.png" alt="" />
      <span>Facebook</span>
    </a>
    </div>

  );
}

export default App;
