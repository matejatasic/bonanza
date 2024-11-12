import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Apartments from './pages/apartments/Apartments';
import Restaurants from './pages/restaurants/Restaurants';
import Gallery from './pages/gallery/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} /> 
        <Route path="/apartmani" element={<Apartments />} />
        <Route path="/restorani" element={<Restaurants />} />
        <Route path="/galerija" element={<Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>    
  );
}

export default App;
