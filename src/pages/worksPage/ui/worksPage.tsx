import { WorkCard } from "../../../shared/ui/workCard"

const WorksPage = () => {
    return(
        <div
            className="pt-[128px] pb-[208px]"
        >
            <div>
                <div
                    className="
                        font-mono
                        text-muted-foreground
                        text-[12px]
                        tracking-[0.2em]
                        uppercase
                        mb-[12px]
                    "
                >
                    Archive
                </div>

                <div
                    className="
                        font-inter
                        text-foreground
                        text-[48px]
                        font-[700]
                        mb-[20px]
                    "
                >
                    All Works
                </div>

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