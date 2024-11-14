import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import "./Apartments.scss"
import { Link } from 'react-router-dom';

export default function Apartments() {
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
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                spaceBetween={30}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
            >
                {images.map(image => {
                    return (
                        <SwiperSlide key={image.name}>
                            <div className="slider">
                                <div className="overlay"></div>
                                <img src={`${process.env.PUBLIC_URL}/images/${image.image}`} alt={`${image.name}-apartment-image`} />
                                <Link to={`/apartmani/${image.name}`} className="image-caption">{image.description}</Link>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    )
}