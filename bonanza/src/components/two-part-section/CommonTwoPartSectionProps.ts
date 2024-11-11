import { ReactElement } from "react"

type CommonTwoPartSectionProps = {
    content: ReactElement,
    image: ReactElement
    shouldReverse?: boolean,
    shouldBackgroundBeDark?: boolean
}

export default CommonTwoPartSectionProps;