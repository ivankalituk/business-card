import type { FC } from "react";
import { SmallHeading } from "../../../shared/ui/smallHeading";
import { BorderedBlock } from "../../../shared/ui/borderedBlock";
import { BoardedBlockTimedContent } from "../../../shared/ui/boardedBlockTimedContent";

const AboutPageEducation: FC = () => {
    return(
        <div className='mt-[48px]'>
            <SmallHeading className='mb-[24px]'>
                Education
            </SmallHeading>

            <BorderedBlock className="p-[24px] md:p-[32px]">
                <BoardedBlockTimedContent
                    heading="B.S. Computer Science"
                    date="2023 — 2026"
                    secondHeading="Unknown University"
                />
            </BorderedBlock>
        </div>
    )
}

export default AboutPageEducation