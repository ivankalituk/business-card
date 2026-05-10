import { BigHeading } from "../../../shared/ui/bigHeading"
import { SecondaryText } from "../../../shared/ui/secondaryText"
import { SmallHeading } from "../../../shared/ui/smallHeading"
import { WorkCard } from "../../../shared/ui/workCard"

const WorksPage = () => {
    return(
        <div
            className="pt-[128px] pb-[208px]"
        >
            <div>
                <SmallHeading className="mb-[12px]">
                    Archive
                </SmallHeading>

                <BigHeading className="text-[48px] mb-[20px]">
                    All Works
                </BigHeading>


                <SecondaryText className="max-w-[700px] mb-[64px]">
                     A comprehensive collection of projects spanning product design, engineering, and creative experiments.
                </SecondaryText>
            </div>
            
            <div 
                className="grid grid-cols-2 gap-[32px]"
            >
                <WorkCard type='DETAILED'/>
                <WorkCard type='DETAILED'/>
                <WorkCard type='DETAILED'/>
            </div>
        </div>
    )
}

export default WorksPage