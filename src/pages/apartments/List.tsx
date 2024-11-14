import Apartment from "./Apartment";

export default function List() {
    return (
        <section className="apartments-list">
            <Apartment shouldReverse={false} />
            <Apartment shouldReverse={true} shouldBackgroundBeDark={true} />
            <Apartment shouldReverse={false} />
        </section>
    );
}