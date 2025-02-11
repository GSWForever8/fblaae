import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import HomePage from './pages/home';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import GalleryPage from './pages/gallery'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/gallery' element={<GalleryPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
