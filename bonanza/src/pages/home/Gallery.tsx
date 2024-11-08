import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import "./Gallery.scss";

export default function Gallery() {
    const [shouldShowLightbox, setShouldShowLightbox] = useState<boolean>(false);
    const [imageIndex, setImageIndex] = useState<number>(0);

    const images = [
        { image: "gallery1.JPG", alt: "standard apartment bedroom", divClass: "w-two" },
        { image: "gallery2.JPG", alt: "superior apartment view from balcony", divClass: "w-three n-m" },
        { image: "gallery3.JPG", alt: "superior apartment bedroom", divClass: "w-two" },
        { image: "gallery4.JPG", alt: "studio kitchen", divClass: "w-one" },
        { image: "gallery5.JPG", alt: "studio kitchen", divClass: "w-one n-m" },
    ];

    const handleImageDivClick = (index: number) => {
        setShouldShowLightbox(true);
        setImageIndex(index);
    }

    return (
        <section className="section gallery">
            <h1 className="txt-caps">Priroda susrece luksuz</h1>
            <h2 className="txt-caps">Elegancija do zadnjeg detalja</h2>
            <div className="section-line"></div>
            <div className="gallery-container">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`image ${img.divClass}`}
                        onClick={() => handleImageDivClick(index)}
                    >
                        <img src={`/images/${img.image}`} alt={img.alt} />
                        <div className="image-overlay">
                            <p className="hidden-fnt">pogledajte sliku u galeriji</p>
                        </div>
                    </div>
                ))}
            </div>
            <Lightbox
                open={shouldShowLightbox}
                close={() => setShouldShowLightbox(false)}
                index={imageIndex}
                slides={images.map(image => {
                    return {
                        src: `images/${image.image}`,
                        alt: image.alt
                    }
                })}
            />
        </section>
    );
}