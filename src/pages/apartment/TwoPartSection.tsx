import CommonTwoPartSection from "../../components/two-part-section/CommonTwoPartSection";
import "./TwoPartSection.scss";

export default function TwoPartSection(props: any) {
    const { shouldReverse, shouldBackgroundBeDark } = props;

    return (
        <CommonTwoPartSection
            content={<>
                <h1 className="two-part-section-div-h1">Vila s 1 sobom, balkonom i privatnim bazenom</h1>
                {/* <h2 className="two-part-section-div-h2">Hotel-like apartments</h2> */}
                <div className="two-part-section-apartment-description">
                    <ul>
                        <li>Bračni krevet u sobi i kauč na razvlačenje u dnevnom boravku</li>
                        <li>75 m2/807 sqft</li>
                        <li>Maksimalni kapacitet 4 gostiju (2+2)</li>
                        <li>Balkon sa panoranskim pogledom na prvom katu</li>
                        <li>Terasa s lounge dijelom u prizemlju</li>
                        <li>Privatni vrt s bazenom i pogledom na maslinike</li>
                        <li>Privatni parking</li>

                    </ul>
                </div>
            </>}
            image={
                <img src="images/apartment-img1.jpg" alt="two-part-image" />
            }
            shouldReverse={shouldReverse}
            shouldBackgroundBeDark={shouldBackgroundBeDark}
        />
    );
}