import type { FC } from "react";
import { SmallHeading } from "../../../shared/ui/smallHeading";
import { BorderedBlock } from "../../../shared/ui/borderedBlock";

const AboutPageExperience: FC = () =>{
    return(
        <div className='mt-[48px]'>
            <SmallHeading className='mb-[24px]'>
                Experience
            </SmallHeading>

            <div className='flex flex-col gap-[32px]'>
                <BorderedBlock>
                    some content
                </BorderedBlock>
                <BorderedBlock>
                    some content
                </BorderedBlock>
                <BorderedBlock>
                    some content
                </BorderedBlock>
            </div>
        </div>
    )
}

export default AboutPageExperience