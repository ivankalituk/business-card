import type { FC } from "react";
import sampleImage from '../../../assets/images/amar-guillen-photographiing-death-valley.jpg'
import { Tag } from "../../tag";
import { ArrowUpRight } from "lucide-react";
import { SecondaryText } from "../../secondaryText";
import { ExternalLink, FileText } from 'lucide-react';
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { BigHeading } from "../../bigHeading";
import { SmallHeading } from "../../smallHeading";

interface Props{
    type: 'SMALL' | 'DETAILED'
}

const WorkCard: FC <Props> = ({type}) =>{
    
    return(
        <div
            className={twMerge(`
                text-foreground
                aspect-[380/512]
                w-[100%]
                bg-card
                glass-border
                rounded-[16px]
                overflow-hidden
                vessel-shadow
                group
                `,`${type === 'DETAILED' && 'aspect-576/638'}`)}
        >
            <div
                className={twMerge(`
                    relative
                    overflow-hidden
                    aspect-[4/3]
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
                    `, `${type === 'DETAILED' && 'aspect-576/360'}`)}
                />

                <div 
                    className="
                        absolute
                        bottom-[0px]
                        h-[30px]
                        w-full
                        bg-gradient-to-t
                        from-card
                        to-transparent
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
                        flex
                        gap-[8px]
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

                {type === 'DETAILED' && <div className="flex gap-[8px] mt-[20px]">
                    <Link to={'/'}>
                        <SecondaryText 
                            className="
                                flex gap-[8px]
                                items-center
                                text-[14px]
                                p-[8px]
                            "
                        >
                            <ExternalLink height={16}/>
                            <span>Live</span>
                        </SecondaryText>
                    </Link>

                    <Link to={'/'}>
                        <SecondaryText
                            className="
                                flex gap-[8px]
                                items-center
                                text-[14px]
                                p-[8px]
                            "
                        >
                            <FileText height={16}/>
                            <span>Github</span>
                        </SecondaryText>
                    </Link>
                </div>
                }
            </div>
        </div>
    )
}

export default WorkCard