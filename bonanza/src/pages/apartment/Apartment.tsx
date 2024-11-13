import { useParams } from "react-router-dom";
import SuperiorHero from "./SuperiorHero";
import StandardHero from "./StandardHero";
import StudioHero from "./StudioHero";
import TwoPartSection from "./TwoPartSection";

enum ApartmentsEnum {
    Superior = "superior",
    Standard = "standard",
    Studio = "studio"
}

export default function Apartment() {
    const { name } = useParams();
    
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

    const apartment = apartments[name as ApartmentsEnum];

    return (
        <main>
            {apartment.hero}
            <section className="rooms-information">
                <TwoPartSection shouldReverse={false} />
                <TwoPartSection shouldReverse={true} shouldBackgroundBeDark={true} />
                <TwoPartSection shouldReverse={false} />
            </section>
        </main>
    );
}