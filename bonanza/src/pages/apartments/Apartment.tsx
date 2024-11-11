import CommonTwoPartSection from "../../components/two-part-section/CommonTwoPartSection";
import "./Apartment.scss"

export default function Apartment(props: any) {
    const {content, image, shouldReverse, shouldBackgroundBeDark} = props;

    return (
        <article className="single-apartment">
            <CommonTwoPartSection
                content={<>
                    <h1 className="two-part-section-h1">Studio</h1>
                    <p className="fs fnt-w-l two-part-section-div-text">U potrazi za jedinstvenim mjestima potrebno je ponekad skrenuti s glavnog puta.
                        No neka vas glavni putevi dovedu do Istre, do Bala. A zatim usporite i pratite cestu koja se sa
                        svakim kilometrom sve više sužava, dok vam se priroda sve više približava. Usporite još i više te
                        skrenite na bijelu cestu na kraju koje se pred vama otvaraju velika željezna vrata. Stigli ste na
                        Meneghetti. Zatim zastanite bar na trenutak – i uvjerite se da se najbolja mjesta nalaze na
                        sporednim putevima.
                    </p>
                    <div className="additional-information">
                        <p>Maksimalna popunjenost: 2 odrasle osobe ili 1 odrasla osoba + 1 dete </p>
                        <p>Veličina: 27 – 33 m²</p>
                    </div>
                </>}
                image={
                    <img src="/images/gallery1.JPG" alt="two-part-image" />
                }
                shouldReverse={shouldReverse}
                shouldBackgroundBeDark={shouldBackgroundBeDark}
            />
        </article>
    );
}