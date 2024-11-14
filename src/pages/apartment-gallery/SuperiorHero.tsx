import CommonHero from "../../components/hero/CommonHero";

export default function SuperiorHero() {
    return (
        <CommonHero imageUrl={`${process.env.PUBLIC_URL}/images/superior-hero.jpg`}>
            <div className="hero-content">
                <h1>Bonanza Superior Apartment</h1>
            </div>
        </CommonHero>
    );
}