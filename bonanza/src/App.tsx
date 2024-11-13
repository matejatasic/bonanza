import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Apartments from './pages/apartments/Apartments';
import Restaurants from './pages/restaurants/Restaurants';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/Contact';
import Apartment from './pages/apartment/Apartment';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/apartmani" element={<Apartments />} />
        <Route path="/apartmani/:name" element={<Apartment />} />
        <Route path="/restorani" element={<Restaurants />} />
        <Route path="/galerija" element={<Gallery />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>    
  );
}

export default App;
