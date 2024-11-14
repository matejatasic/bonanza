import CommonTwoPartSectionProps from "./CommonTwoPartSectionProps";
import "./CommonTwoPartSection.scss"

export default function CommonTwoPartSection(props: CommonTwoPartSectionProps) {
    const { content, image, shouldReverse, shouldBackgroundBeDark } = props;

    return (
        <div className={`two-part-section-div ${shouldBackgroundBeDark ? "background-dark" : ""}`}>
            {shouldReverse ? (
                <>
                    <div className="content padding">
                        {content}
                    </div>
                    <div className="image">
                        {image}
                    </div>
                </>
            ) : (
                <>
                    <div className="image padding">
                        {image}
                    </div>
                    <div className="content">
                        {content}
                    </div>
                </>
            )}
        </div>
    );
}