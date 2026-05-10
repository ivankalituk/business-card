import type { FC } from "react";
import { SmallHeading } from "../../../shared/ui/smallHeading";
import { BorderedBlock } from "../../../shared/ui/borderedBlock";

const AboutPageEducation: FC = () => {
    return(
        <div className='mt-[48px]'>
            <SmallHeading className='mb-[24px]'>
                Education
            </SmallHeading>

            <BorderedBlock>
                some content
            </BorderedBlock>
        </div>
    )
}

export default AboutPageEducation