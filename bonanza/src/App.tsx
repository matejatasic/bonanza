import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Apartments from './pages/apartments/Apartments';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} /> 
        <Route path="/apartmani" element={<Apartments />} />
      </Routes>
      <Footer />
    </BrowserRouter>    
  );
}

export default App;
