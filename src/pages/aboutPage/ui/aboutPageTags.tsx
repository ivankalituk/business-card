import type { FC } from "react";
import { SmallHeading } from "../../../shared/ui/smallHeading";
import { Tag } from "../../../shared/ui/tag";

const AboutPageTags: FC = () => {
    return(
        <div className='mt-[48px]'>
            <SmallHeading className='mb-[24px]'>
                Skills & Expertise
            </SmallHeading>
            
            <div className='flex gap-[8px]'>
                <Tag name='REACT'/>
                <Tag name='Next.js'/>
                <Tag name='Nest.js'/>
                <Tag name='MySQL'/>
                <Tag name='Express.js'/>
                <Tag name='Tailwind CSS'/>
                <Tag name='Sass'/>
                <Tag name='Figma'/>
            </div>
        </div>
    )
}

export default AboutPageTags