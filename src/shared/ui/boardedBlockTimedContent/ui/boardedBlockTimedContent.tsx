import type { FC } from "react";
import { BigHeading } from "../../bigHeading";
import { SmallHeading } from "../../smallHeading";
import { SecondaryText } from "../../secondaryText";

interface Props {
    heading?: string
    date?: string
    secondHeading?: string
    content?: string
}

const BoardedBlockTimedContent: FC <Props> = ({heading, date, secondHeading, content}) => {
    console.log(date)

    return(
        <div>
            {(heading || date) && <div
                className="
                    flex
                    gap-[8px]
                    items-center
                    justify-between
                "
            >
                {heading && <BigHeading className="text-[16px]">{heading}</BigHeading>}
                {date && <SmallHeading className="text-[12px] tracking-[0.1em] normal-case">{date}</SmallHeading>}
            </div>}
            
            {secondHeading && <SecondaryText className="text-[14px] mt-[8px]">{secondHeading}</SecondaryText>}

            {content && <SecondaryText className="text-[14px] mt-[8px]">{content}</SecondaryText>}
        </div>
    )
}

export default BoardedBlockTimedContent