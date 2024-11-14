import { Link } from "react-router-dom";

import CommonTwoPartSection from "../../components/two-part-section/CommonTwoPartSection";
import "./Apartment.scss"

export default function Apartment(props: any) {
    const {content, image, shouldReverse, shouldBackgroundBeDark} = props;

    return (
        <article className="single-apartment">
            <CommonTwoPartSection
                content={<>
                    <Link to="/apartmani/studio"><h1 className="two-part-section-div-h1">Studio</h1></Link>
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
                    <Link to="/apartmani/studio">
                        <img src={`${process.env.PUBLIC_URL}/images/gallery1.JPG`} alt="two-part-image" />
                    </Link>
                }
                shouldReverse={shouldReverse}
                shouldBackgroundBeDark={shouldBackgroundBeDark}
            />
        </article>
    );
}