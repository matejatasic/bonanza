import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Apartments.scss"

export default function Apartments() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1
        }
    };
    const images = [
        {
            name: "superior",
            image: "superior1.JPG",
            description: "Superior apartment"
    },
        {
            name: "standard",
            image: "standard.JPG",
            description: "Standard apartment"
    },
        {
            name: "studio",
            image: "studio.JPG",
            description: "Studio apartment"
    }
    ]

    return (
        <section className="apartments">
            <Carousel
                autoPlay={true}
                autoPlaySpeed={2000}
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
            >
                {images.map(image => {
                    return (
                        <div className="slider" key={image.name}>
                            <div className="overlay"></div>
                            <img src={`images/${image.image}`} alt={`${image.name}-apartment-image`} />
                            <div className="image-caption">{image.description}</div>
                        </div>
                    );
                })}
            </Carousel>
        </section>
    )
}