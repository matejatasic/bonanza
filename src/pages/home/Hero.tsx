import CommonHero from "../../components/hero/CommonHero";

export default function Hero() {
    return (
        <CommonHero imageUrl={`${process.env.PUBLIC_URL}/images/hero2.jpg`} />
    );
}