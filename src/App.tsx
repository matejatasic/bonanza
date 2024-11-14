import { HashRouter } from 'react-router-dom';

import './App.scss';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import AnimatedRoutes from './components/animated-routes/AnimatedRoutes';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </HashRouter>
  );
}

export default App;
