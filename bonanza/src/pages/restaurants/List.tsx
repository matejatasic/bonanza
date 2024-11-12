import Restaurant from "./Restaurant";

export default function List() {
    return (
        <section className="restaurants-list">
            <Restaurant shouldReverse={false} />
            <Restaurant shouldReverse={true} shouldBackgroundBeDark={true} />
            <Restaurant shouldReverse={false} />
        </section>
    );
}