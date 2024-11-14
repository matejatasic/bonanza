import { Link, useLocation } from "react-router-dom";

import "./DesktopNavigation.scss"

export default function DesktopNavigation() {
    const location = useLocation();

    return (
        <div className="desktop-navigation">
            <div className="logo">
                <Link to="" className="logo">
                    <img className="logo-image" src="/images/logo9.svg" alt="site-logo" />
                </Link>
            </div>
            <nav className="nav-bar">
                <ul className="desktop-nav-menu txt-caps fnt-w-l">
                    <li className="nav-item">
                        <Link
                            to="/apartmani"
                            className={location.pathname === "/apartmani" ? "active-link" : ""}
                        >
                            Apartmani
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/restorani"
                            className={location.pathname === "/restorani" ? "active-link" : ""}
                        >
                            Restorani
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/galerija"
                            className={location.pathname === "/galerija" ? "active-link" : ""}
                        >
                            Galerija
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/kontakt"
                            className={location.pathname === "/kontakt" ? "active-link" : ""}
                        >
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="desktop-header-right">
                <div className="language">
                    <a href="#">EN</a>
                    <span className="language-separator">/</span>
                    <a href="#" className="active-language">RS</a>
                </div>
                <div className="booking-section">
                    <button className="btn btn-green">Rezerviši</button>
                    <p className="best-rate txt-caps">Garancija najbolje cene</p>
                </div>
            </div>
        </div>
    );
}