import CommonHero from "../../components/hero/CommonHero";

export default function Hero() {
    return (
        <CommonHero
            imageUrl="images/restaurant-hero.jpg"
        >
            <div className="hero-content">
                <h1>Bonanza preporuka restorana!</h1>
            </div>
        </CommonHero>
    );
}