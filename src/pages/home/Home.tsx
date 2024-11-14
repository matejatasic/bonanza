import Apartments from "./Apartments";
import Gallery from "./Gallery";
import Hero from "./Hero";
import TwoPartSection from "./TwoPartSection";

export default function Home() {
    return (
        <main>
            <Hero />
            <TwoPartSection />
            <Gallery />
            <Apartments /> 
        </main>
    )
}