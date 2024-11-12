import CommonTwoPartSection from "../../components/two-part-section/CommonTwoPartSection";
import "./Restaurant.scss"

export default function Restaurant(props: any) {
    const {content, image, shouldReverse, shouldBackgroundBeDark} = props;

    return (
        <article className="single-restaurant">
            <CommonTwoPartSection
                content={<>
                    <div className="about">
                        <h1 className="two-part-section-div-h1">Bonanza restaurant</h1>
                        <p className="fs fnt-w-l two-part-section-div-text about-text">
                            Doživite modernu interpretaciju istarske kuhinje u našem restoranu gdje 
                            su jela kreativno predstavljena i pripremljena od svježih,
                            autentičnih i sezonski odabranih lokanih sastojaka. Rezervacija je obavezna.
                        </p>
                    </div>
                    <div className="working-hours">
                        <h2 className="two-part-section-div-h2">RADNO VREME</h2>
                        <p className="fs fnt-w-l two-part-section-div-text">
                            Doživite modernu interpretaciju istarske kuhinje u našem restoranu gdje 
                            su jela kreativno predstavljena i pripremljena od svježih,
                            autentičnih i sezonski odabranih lokanih sastojaka. Rezervacija je obavezna.
                        </p>
                    </div>
                    <div className="information">
                        <h2 className="two-part-section-div-h2">INFORMACIJE</h2>
                        <p className="fs fnt-w-l two-part-section-div-text">
                            + 385 52 528 800
                        </p>
                        <p className="fs fnt-w-l two-part-section-div-text email">
                            restaurant@meneghetti.hr
                        </p>
                    </div>
                </>}
                image={
                    <img src="/images/restaurant_new.png" alt="two-part-image" />
                }
                shouldReverse={shouldReverse}
                shouldBackgroundBeDark={shouldBackgroundBeDark}
            />
        </article>
    );
}