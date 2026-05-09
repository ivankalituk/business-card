import { BigHeading } from "../../../shared/ui/bigHeading"
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

                <BigHeading className="text-[48px]">
                    All Works
                </BigHeading>

                <div
                    className="
                        font-inter
                        text-muted-foreground
                        text-[18px]
                        mb-[64px]
                        max-w-[700px]
                        leading-[1.5]
                    "
                >
                    A comprehensive collection of projects spanning product design, engineering, and creative experiments.
                </div>
            </div>
            
            <div 
                className="flex gap-[16px]"
            >
                <WorkCard type='DETAILED'/>
                <WorkCard type='DETAILED'/>
                <WorkCard type='DETAILED'/>
            </div>
        </div>
    )
}

export default WorksPage