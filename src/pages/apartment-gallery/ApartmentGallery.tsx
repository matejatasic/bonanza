import { useState } from "react";

import { useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";

import ApartmentsEnum from "../../enums/ApartmentsEnum";
import StandardHero from "./StandardHero";
import StudioHero from "./StudioHero";
import SuperiorHero from "./SuperiorHero";
import "./ApartmentGallery.scss";

export default function ApartmentGallery() {
    const { name } = useParams();
    const [shouldShowLightbox, setShouldShowLightbox] = useState<boolean>(false);
    const [imageIndex, setImageIndex] = useState<number>(0);

    const apartments: Record<ApartmentsEnum, any> = {
        superior: {
            hero: <SuperiorHero />
        },
        standard: {
            hero: <StandardHero />
        },
        studio: {
            hero: <StudioHero />
        }
    };
    const galleryImages = [
        {
            image: "gallery-image.jpg",
            alt: "gallery-image"
        },
        {
            image: "gallery-image.jpg",
            alt: "gallery-image"
        },
        {
            image: "gallery-image.jpg",
            alt: "gallery-image"
        },
        {
            image: "gallery-image.jpg",
            alt: "gallery-image"
        },
        {
            image: "gallery-image.jpg",
            alt: "gallery-image"
        },
        {
            image: "gallery-image.jpg",
            alt: "gallery-image"
        },
        {
            image: "gallery-image.jpg",
            alt: "gallery-image"
        },
        {
            image: "gallery-image.jpg",
            alt: "gallery-image"
        },
        {
            image: "gallery-image.jpg",
            alt: "gallery-image"
        },
        {
            image: "gallery-image.jpg",
            alt: "gallery-image"
        },
    ]

    const apartment = apartments[name as ApartmentsEnum];

    const handleImageDivClick = (index: number) => {
        setShouldShowLightbox(true);
        setImageIndex(index);
    }

    return (
        <main>
            {apartment.hero}
            <section className="single-apartment-gallery">
                <div className="single-apartment-container-wrapper">
                    {galleryImages.map((image, index) => {
                        return (
                            <div
                                className="apartment-gallery-image"
                                key={index}
                                onClick={() => handleImageDivClick(index)}
                            >
                                <img src={`${process.env.PUBLIC_URL}/images/${image.image}`} alt={image.alt} />
                                <div className="image-overlay">
                                    <p>pogledajte sliku u galeriji</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Lightbox
                    open={shouldShowLightbox}
                    close={() => setShouldShowLightbox(false)}
                    index={imageIndex}
                    slides={galleryImages.map(image => {
                        return {
                            src: `${process.env.PUBLIC_URL}/images/${image.image}`,
                            alt: image.alt
                        }
                    })}
                    styles={{
                        container: { backgroundColor: "rgba(0, 0, 0, .8)" },
                    }}
                />
            </section>
        </main>
    );
}