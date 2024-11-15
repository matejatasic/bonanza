import CommonHero from "../../components/hero/CommonHero";

export default function StandardHero() {
    return (
        <CommonHero imageUrl={`${process.env.PUBLIC_URL}/images/standard-hero.jpg`}>
            <div className="hero-content">
                <h1>Bonanza Standard Apartment</h1>
            </div>
        </CommonHero>
    );
}