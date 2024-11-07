import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";

import "./Footer.scss"

export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-top-section">
                    <p className="footer-section-heading">REZERVACIJE I INFORMACIJE</p>
                    <div className="footer-top-subsection contact-information mt">
                        <a href="tel:+385 52 528 800">+381 62 670 256</a>
                        <a href="mailto:apartmanibonanza@gmail.com">apartmanibonanza@gmail.com</a>
                    </div>
                </div>
                <div className="footer-top-section social-networks-section">
                    <p className="footer-section-heading">OSTANIMO U KONTAKTU</p>
                    <p className="footer-section-subheading mt">PODELITE SVOJE BONANZA ISKUSTVO</p>
                    <div className="footer-top-subsection social-networks mt">
                        <IconContext.Provider
                            value={{
                                color: "white",
                                size: "1.375rem"
                            }}
                        >
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaYoutube /></a>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="footer-top-section">
                    <p className="footer-section-heading">INFORMACIJE O FIRMI</p>
                    <div className="footer-top-subsection mt">
                        <p>Bonanza PR</p>
                        <p>Trg kralja Milana 21, 18000 Nis, Serbia</p>
                        <p>PIB: 113004709</p>
                    </div>
                </div>
            </div>
            <div className="footer-middle">
                <div></div>
                <div className="join-us-section">
                    <div className="email-form">
                        <p className="footer-section-heading">PRIDRUŽITE SE KLUBU BONANZA</p>
                        <p className="mt">PRIMITE NAŠE NAJBOLJE</p>
                        <p>PONUDE I UŽIVAJTE U </p>
                        <p>POVLAŠĆENIM CENAMA!</p>
                        <form method="POST">
                            <input className="mt" name="email" type="text" placeholder="Email" />
                            <button className="btn btn-green mt" name="submit" type="submit">Pridruži se klubu!</button>
                        </form>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="footer-down">
                <p>Sva prava zadržana © 2023</p>
            </div>
        </footer>
    )
}