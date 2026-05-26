import { BigHeading } from "../../../shared/ui/bigHeading"
import { SecondaryText } from "../../../shared/ui/secondaryText"
import { SmallHeading } from "../../../shared/ui/smallHeading"
import { WorkCard } from "../../../shared/ui/workCard"

const WorksPage = () => {
    return(
        <div
            className="
                pt-[60px] pb-[256px]
                md:pt-[128px]
            "
        >
            <div>
                <SmallHeading className="mb-[12px]">
                    Archive
                </SmallHeading>

                <BigHeading className="text-[30px] td:text-[48px] mb-[20px]">
                    All Works
                </BigHeading>


                <SecondaryText className="max-w-[700px] mb-[64px]">
                     A comprehensive collection of projects spanning product design, engineering, and creative experiments.
                </SecondaryText>
            </div>
            
            <div 
                className="grid grid-cols-1 gap-[24px] td:gap[32px] td:grid-cols-2"
            >
                <WorkCard type='DETAILED'/>
                <WorkCard type='DETAILED'/>
                <WorkCard type='DETAILED'/>
            </div>
        </div>
    )
}

export default WorksPage