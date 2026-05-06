import type { FC } from "react";
import sampleImage from '../../../assets/images/amar-guillen-photographiing-death-valley.jpg'
import { Tag } from "../../tag";
import { ArrowUpRight } from "lucide-react";


interface Props{
    type: 'SMALL' | 'DETAILED'
}

const WorkCard: FC <Props> = ({type}) =>{
    console.log(type)
    
    return(
        <div
            className="
                relative
                text-foreground
                aspect-[380/512]
                max-w-[380px]
                w-[100%]
                bg-card
                glass-border
                rounded-[16px]
                overflow-hidden
                vessel-shadow
                group
            "
        >
            <div
                className="
                    overflow-hidden
                    aspect-[4/3]
                "
            >
                <img 
                    src={sampleImage} 
                    alt="workImage"
                    className="
                        aspect-[4/3]
                        w-[100%]
                        object-cover
                        overflow-hidden
                        transition-transform duration-700 group-hover:scale-105
                    " 
                />
            </div>

            <div
                className="
                    p-[32px]
                "
            >
                <div
                    className="
                        flex
                        justify-between
                        items-center
                    "
                >
                    <div
                        className="
                            text-foreground
                            font-inter
                            font-[20px]
                            font-[600]
                        "
                    >
                        Project Name
                    </div>
                    
                    <div
                        className="
                            font-mono
                            text-[12px]
                            text-muted-foreground
                        "
                    >
                        2026
                    </div>
                </div>

                <div
                    className="
                        text-muted-foreground
                        mt-[12px]
                        font-inter
                        text-[14px]
                    "
                >
                    Enterprise analytics platform 
                    with real-time data visualization
                </div>

                <div
                    className="
                        mt-[20px]
                        flex
                        gap-[8px]
                    "
                >
                    <Tag name="REACT"/>
                    <Tag name="TYPESCRIPT"/>
                    <Tag name="NEXT"/>
                </div>

                <div 
                    className="
                        mt-[20px] 
                        flex items-center gap-[8px]
                        text-[14px] 
                        text-muted-foreground 
                        group-hover:text-foreground 
                        transition-colors duration-300
                    "
                >
                    <span>View Project</span>
                    <ArrowUpRight 
                        className="
                            w-[16px] h-[16px] 
                            transition-transform duration-300 
                            group-hover:translate-x-[1px] group-hover:-translate-y-[1px]
                        " 
                    />
                </div>
            </div>
        </div>
    )
}

export default WorkCard