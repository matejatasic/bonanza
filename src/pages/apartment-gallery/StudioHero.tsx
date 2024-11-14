import CommonHero from "../../components/hero/CommonHero";

export default function StudioHero() {
    return (
        <CommonHero imageUrl={`${process.env.PUBLIC_URL}/images/studio-hero.jpg`}>
            <div className="hero-content">
                <h1>
                    Bonanza Studio Apartment
                </h1>
            </div>
        </CommonHero>
    );
}