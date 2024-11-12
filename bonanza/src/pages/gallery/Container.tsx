import { Link } from "react-router-dom";

import "./Container.scss";

export default function Container() {
    return (
        <div className="container-wrapper">
            <div className="container-item">
                <Link to="" className="image-link">
                    <img src="/images/superior1.JPG" alt="superior-apartment-image" />
                    <div className="content-overlay">
                        <p className="title">Superior</p>
                        <div className="content-overlay-hidden">
                            <p>Za opušten odmor vaše porodice</p>
                            <p className="see-paragraph">Pogledaj</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="container-item">
                <Link to="" className="image-link">
                    <img src="/images/standard.JPG" alt="standard-apartment-image" />
                    <div className="content-overlay">
                        <p className="title">Standard</p>
                        <div className="content-overlay-hidden">
                            <p>Za opušten odmor vaše porodice</p>
                            <p className="see-paragraph">Pogledaj</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="container-item">
                <Link to="" className="image-link">
                    <img src="/images/studio.JPG" alt="studio-apartment-image" />
                    <div className="content-overlay">
                        <p className="title">Studio</p>
                        <div className="content-overlay-hidden">
                            <p>Za opušten odmor vaše porodice</p>
                            <p className="see-paragraph">Pogledaj</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}