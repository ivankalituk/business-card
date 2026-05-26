import type { FC } from "react";
import { SmallHeading } from "../../../shared/ui/smallHeading";
import { BorderedBlock } from "../../../shared/ui/borderedBlock";
import { BoardedBlockTimedContent } from "../../../shared/ui/boardedBlockTimedContent";

const AboutPageExperience: FC = () =>{
    return(
        <div className='mt-[48px]'>
            <SmallHeading className='mb-[24px]'>
                Experience
            </SmallHeading>

            <div className='flex flex-col gap-[32px]'>
                <BorderedBlock className="p-[24px] md:p-[32px]">
                    <BoardedBlockTimedContent 
                        heading="Senior Creative Developer"
                        date="2023 — Present"
                        secondHeading="Freelance"
                        content="Building high-end digital products for select clients worldwide."
                    />
                </BorderedBlock>
                
                <BorderedBlock className="p-[24px] md:p-[32px]">
                    <BoardedBlockTimedContent 
                        heading="Senior Creative Developer"
                        date="2023 — Present"
                        secondHeading="Freelance"
                        content="Building high-end digital products for select clients worldwide."
                    />
                </BorderedBlock>

                <BorderedBlock className="p-[24px] md:p-[32px]">
                    <BoardedBlockTimedContent 
                        heading="Senior Creative Developer"
                        date="2023 — Present"
                        secondHeading="Freelance"
                        content="Building high-end digital products for select clients worldwide."
                    />
                </BorderedBlock>
            </div>
        </div>
    )
}

export default AboutPageExperience