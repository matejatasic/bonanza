import HeroProps from "./HeroProps";
import "./CommonHero.scss"

export default function CommonHero(props: HeroProps) {
    const { children, imageUrl } = props;

    return (
        <section className="hero">
            <img className="hero-img" src={imageUrl} alt=""></img>
            {children ? children : null}
        </section>
    );
}