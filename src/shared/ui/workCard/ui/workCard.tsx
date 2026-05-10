import type { FC } from "react";
import sampleImage from '../../../assets/images/amar-guillen-photographiing-death-valley.jpg'
import { Tag } from "../../tag";
import { ArrowUpRight } from "lucide-react";
import { SecondaryText } from "../../secondaryText";
import { twMerge } from "tailwind-merge";
import { BigHeading } from "../../bigHeading";
import { SmallHeading } from "../../smallHeading";
import DetailedCardLink from "./detailedCardLinks";

interface Props{
    type: 'SMALL' | 'DETAILED'
}

const WorkCard: FC <Props> = ({type}) =>{
    
    return(
        <div
            className={twMerge(`
                flex flex-col
                text-foreground
                aspect-[380/512]
                w-[100%]
                bg-card
                glass-border
                rounded-[16px]
                overflow-hidden
                vessel-shadow
            `,`${type === 'DETAILED' && 'aspect-576/638'} ${type === 'SMALL' && 'group'}`)}
        >
            <div
                className={twMerge(`
                    relative
                    overflow-hidden
                    aspect-[4/3]
                    group/img
                `, `${type === 'DETAILED' && 'aspect-576/360'}`)}
            >
                <img 
                    src={sampleImage} 
                    alt="workImage"
                    className={twMerge(`
                        scale-101
                        aspect-[4/3]
                        w-[100%]
                        object-cover
                        overflow-hidden
                        transition-transform duration-700 group-hover:scale-105
                    `, `${type === 'DETAILED' && 'aspect-576/360 hover:scale-105 cursor-pointer'}`)}
                />

                <div 
                    className="
                        absolute
                        bottom-[0px]
                        h-[30px]
                        w-full
                        z-20
                        bg-gradient-to-t
                        from-card
                        to-transparent
                    "
                />

                {type === 'DETAILED' && <div 
                    className="
                        pointer-events-none
                        absolute
                        z-10
                        w-[100%]
                        h-[100%]
                        top-[0px]
                        left-[0px]
                        bg-background/70
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover/img:opacity-100
                    " 
                >
                    <div className="flex items-center justify-around w-[100%] h-[100%]">
                        View Images
                    </div>
                </div>}
            </div>

            <div
                className="
                    p-[32px]
                    flex flex-col
                    flex-1
                "
            >
                <div
                    className="
                        flex
                        justify-between
                        items-center
                    "
                >
                    <BigHeading className="text-[20px] font-[600]">Project Name</BigHeading>
                    <SmallHeading className="text-12px text-muted-foreground  tracking-[0em]">2026</SmallHeading>

                </div>


                <SecondaryText className="mt-[12px] text-[14px]">
                    Enterprise analytics platform 
                    with real-time data visualization
                </SecondaryText>

                <div
                    className="
                        mt-[20px]
                        flex gap-[8px]
                    "
                >
                    <Tag name="REACT"/>
                    <Tag name="TYPESCRIPT"/>
                    <Tag name="NEXT"/>
                </div>

                {type === 'SMALL' && <div 
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
                </div>}

                {type === 'DETAILED' && <div className="flex gap-[8px] mt-[20px] mt-auto">
                    <DetailedCardLink type='LINK' link="/"/>
                    <DetailedCardLink type='TEXT' link="/"/>
                    <DetailedCardLink type='GITHUB' link="/"/>
                </div>
                }
            </div>
        </div>
    )
}

export default WorkCard