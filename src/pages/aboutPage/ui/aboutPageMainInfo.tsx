import type { FC } from "react";
import { SmallHeading } from "../../../shared/ui/smallHeading";
import { BigHeading } from "../../../shared/ui/bigHeading";
import { SecondaryText } from "../../../shared/ui/secondaryText";

const AboutPageMainInfo: FC = () => {
    return(
        <div>
            <SmallHeading className='mb-[16px]'>
                About
            </SmallHeading>

            <BigHeading className='mb-[24px] text-[60px]'>
                Ivan Kalitiuk
            </BigHeading>

            <SecondaryText className='mb-[32px] text-[18px]'>
                Senior Creative Developer
            </SecondaryText>

            <SecondaryText className='mb-[16px] text-[16px]'>
                I'm a creative developer with 8+ years of experience building 
                high-end digital products. My work spans enterprise dashboards, 
                design systems, and experimental web experiences. I believe in 
                the power of thoughtful design paired with robust engineering 
                to create products that truly resonate.
            </SecondaryText>

            <SecondaryText className='mb-[32px] text-[16px]'>
                Currently focused on real-time visualization, accessibility-first 
                design systems, and WebGL experimentation. Previously led frontend 
                teams at major tech companies and contributed to several open-source 
                projects.
            </SecondaryText>
        </div>
    )
}

export default AboutPageMainInfo