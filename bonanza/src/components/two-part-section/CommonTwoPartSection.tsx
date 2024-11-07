import CommonTwoPartSectionProps from "./CommonTwoPartSectionProps";
import "./CommonTwoPartSection.scss"

export default function CommonTwoPartSection(props: CommonTwoPartSectionProps) {
    const { content, images } = props;

    return (
        <section className="section">
            <div className="content">
                {content}
            </div>
            <div className="images">
                {images}
            </div>
        </section>
    );
}