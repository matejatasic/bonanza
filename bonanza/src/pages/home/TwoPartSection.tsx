import CommonTwoPartSection from "../../components/two-part-section/CommonTwoPartSection";

export default function TwoPartSection() {
    return (
        <CommonTwoPartSection
            content={<>
                <h1 className="two-part-section-h1">Bonanza</h1>
                <h2 className="two-part-section-h2">Hotel-like apartments</h2>
                <p className="mt fs fnt-w-l two-part-section-text">U potrazi za jedinstvenim mjestima potrebno je ponekad skrenuti s glavnog puta.
                    No neka vas glavni putevi dovedu do Istre, do Bala. A zatim usporite i pratite cestu koja se sa
                    svakim kilometrom sve više sužava, dok vam se priroda sve više približava. Usporite još i više te
                    skrenite na bijelu cestu na kraju koje se pred vama otvaraju velika željezna vrata. Stigli ste na
                    Meneghetti. Zatim zastanite bar na trenutak – i uvjerite se da se najbolja mjesta nalaze na
                    sporednim putevima.</p>
            </>}
            images={<>
                <img src="/images/galery-image.jpg" alt="two-part-image" />
            </>}
        />
    );
}