import "./Gallery.scss"

export default function Gallery() {
    return (
        <section className="section gallery">
            <h1 className="txt-caps">Priroda susrece luksuz</h1>
            <h2 className="txt-caps">Elegancija do zadnjeg detalja</h2>
            <div className="section-line"></div>
            <div className="gallery-container">
                <div className="image w-two">
                    <img src="/images/gallery1.JPG" alt="" />
                    <div className="image-overlay">
                        <p className="hidden-fnt">pogledajte sliku u galeriji</p>
                    </div>
                </div>
                <div className="image w-three n-m">
                    <img src="/images/gallery2.jpg" alt="" />
                    <div className="image-overlay">
                        <p className="hidden-fnt">pogledajte sliku u galeriji</p>
                    </div>
                </div>
                <div className="image w-two">
                    <img src="/images/gallery3.JPG" alt="" />
                    <div className="image-overlay">
                        <p className="hidden-fnt">pogledajte sliku u galeriji</p>
                    </div>
                </div>
                <div className="image w-one">
                    <img src="/images/gallery4.JPG" alt="" />
                    <div className="image-overlay">
                        <p className="hidden-fnt">pogledajte sliku u galeriji</p>
                    </div>
                </div>
                <div className="image w-one n-m">
                    <img src="/images/gallery5.JPG" alt="" />
                    <div className="image-overlay">
                        <p className="hidden-fnt">pogledajte sliku u galeriji</p>
                    </div>
                </div>
            </div>
        </section>
    );
}