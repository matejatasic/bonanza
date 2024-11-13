import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Home from '../../pages/home/Home';
import Apartments from '../../pages/apartments/Apartments';
import Restaurants from '../../pages/restaurants/Restaurants';
import Gallery from '../../pages/gallery/Gallery';
import Contact from '../../pages/contact/Contact';
import Apartment from '../../pages/apartment/Apartment';

const pageTransition = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
};

export default function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageTransition}
                        transition={{ duration: 0.5 }}
                        className="home component"
                    >
                        <Home />
                    </motion.div>
                } />
                <Route path="/apartmani" element={
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageTransition}
                        transition={{ duration: 0.5 }}
                        className="apartments component"
                    >
                        <Apartments />
                    </motion.div>
                } />
                <Route path="/apartmani/:name" element={
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageTransition}
                        transition={{ duration: 0.5 }}
                        className="apartment component"
                    >
                        <Apartment />
                    </motion.div>
                } />
                <Route path="/restorani" element={
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageTransition}
                        transition={{ duration: 0.5 }}
                        className="restaurants component"
                    >
                        <Restaurants />
                    </motion.div>
                } />
                <Route path="/galerija" element={
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageTransition}
                        transition={{ duration: 0.5 }}
                        className="gallery component"
                    >
                        <Gallery />
                    </motion.div>
                } />
                <Route path="/kontakt" element={
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageTransition}
                        transition={{ duration: 0.5 }}
                        className="contact component"
                    >
                        <Contact />
                    </motion.div>
                } />
            </Routes>
        </AnimatePresence>
    );
}