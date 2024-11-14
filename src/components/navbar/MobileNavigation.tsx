import { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { MdOutlineMenu, MdClose } from 'react-icons/md';

import "./MobileNavigation.scss"

export default function MobileNavigation() {
    const [shouldShowNav, setShouldShowNav] = useState<boolean>(false);
    const location = useLocation();

    const iconClass = "hamburger-menu";
    const iconSize = "40px";
    const iconColor = "black";


    const Hamburger = <MdOutlineMenu className={iconClass}
        size={iconSize} color={iconColor} onClick={() => toggleShouldShowNav()} />

    const Close = <MdClose className={iconClass}
        size={iconSize} color={iconColor}
        onClick={() => toggleShouldShowNav()} />

    function toggleShouldShowNav() {
        setShouldShowNav(!shouldShowNav)
    }

    function handleLinkClick() {
        setShouldShowNav(false);
    }

    return (
        <div className="mobile-navigation">
            <div className="main-mobile-header">
                <div className="logo">
                    <Link 
                        to=""
                        onClick={handleLinkClick}
                        className="logo"
                    >
                        <img className="logo-image" src="images/logo9.svg" alt="site-logo" />
                    </Link>
                </div>
                <div className="mobile-header-right">
                    <div className="language">
                        <a href="#">EN</a>
                        <span className="language-separator">/</span>
                        <a href="#" className="active-language">RS</a>
                    </div>
                    <div className="open-close-buttons">
                        {shouldShowNav ? Close : Hamburger}
                    </div>
                </div>
            </div>
            <nav className={`mobile-nav ${shouldShowNav ? "active" : ""}`}>
                <ul className="mobile-nav-menu">
                    <li className="nav-item">
                        <Link
                            to="/apartmani"
                            onClick={handleLinkClick}
                            className={location.pathname === "/apartmani" ? "active-link" : ""}
                        >
                            Apartmani
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/restorani"
                            onClick={handleLinkClick}
                            className={location.pathname === "/restorani" ? "active-link" : ""}
                        >
                            Restorani
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/galerija"
                            onClick={handleLinkClick}
                            className={location.pathname === "/galerija" ? "active-link" : ""}
                        >
                            Galerija
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/kontakt"
                            onClick={handleLinkClick}
                            className={location.pathname === "/kontakt" ? "active-link" : ""}
                        >
                            Kontakt
                        </Link>
                    </li>
                </ul>
                <div className="booking-section">
                    <button className="btn btn-green">Rezerviši</button>
                    <p className="best-rate txt-caps">Garancija najbolje cene</p>
                </div>
            </nav>
        </div>
    );
}