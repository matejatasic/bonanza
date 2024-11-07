import "./DesktopNavigation.scss"

export default function DesktopNavigation() {
    return (
        <div className="desktop-navigation">
            <div className="logo">
                <a href="index.html" className="logo">
                    <img className="logo-image" src="/images/logo9.svg" alt="site-logo" />
                </a>
            </div>
            <nav className="nav-bar">
                <ul className="desktop-nav-menu txt-caps fnt-w-l">
                    <li className="nav-item"><a href="apartmani.html">Apartmani</a></li>
                    <li className="nav-item"><a href="restorani.html">Restorani</a></li>
                    <li className="nav-item"><a href="galerija.html">Galerija</a></li>
                    <li className="nav-item"><a href="kontakt.html">Kontakt</a></li>
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