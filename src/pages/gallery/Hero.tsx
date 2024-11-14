import CommonHero from "../../components/hero/CommonHero";

export default function Hero() {
    return (
        <CommonHero
            imageUrl={`${process.env.PUBLIC_URL}/images/restaurant-hero.jpg`}
        >
            <div className="hero-content">
                <h1>Jednostavno Bonanza</h1>
            </div>
        </CommonHero>
    );
}