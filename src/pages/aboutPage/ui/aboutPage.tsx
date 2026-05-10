import avatar from '../../../shared/assets/images/avatarSample.png'
import { BigHeading } from '../../../shared/ui/bigHeading'
import { BorderedBlock } from '../../../shared/ui/borderedBlock'
import { BorderedBlockHeading } from '../../../shared/ui/borderedBlockHeading'
import { SecondaryText } from '../../../shared/ui/secondaryText'
import { SmallHeading } from '../../../shared/ui/smallHeading'
import { Tag } from '../../../shared/ui/tag'

const AboutPage = () => {
    return(
        <div 
            className="
                relative
                mt-[128px] mb-[208px]
                flex gap-[32px]
                text-foreground
            "
        >

            {/* Aavatar sticky block */}
            <div
                className="
                    max-w-[300px]
                    sticky
                    top-[60px]
                    self-start
                "
            >
                <img 
                    src={avatar} 
                    alt="avatar" 
                    
                    className="
                        w-[100%]
                        h-[1]
                        object-cover
                        overflow-hidden
                        vessel-shadow 
                        glass-border 
                        rounded-[16px]
                        overflow-hidden
                    "
                />

                <div>LINKS</div>

            </div>

            {/* CONTENT BLOCK */}
            <div
                className="
                    flex-[2]
                    h-[2000px]
                "
            >
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

                <BorderedBlock>
                    <BorderedBlockHeading name='Contact' />

                    <SecondaryText>
                        some contacts
                    </SecondaryText>
                </BorderedBlock>

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

                <div className='mt-[48px]'>
                    <SmallHeading className='mb-[24px]'>
                        Experience
                    </SmallHeading>

                    <div className='flex flex-col gap-[32px]'>
                        <BorderedBlock>
                            some content
                        </BorderedBlock>
                        <BorderedBlock>
                            some content
                        </BorderedBlock>
                        <BorderedBlock>
                            some content
                        </BorderedBlock>
                    </div>
                </div>

                <div className='mt-[48px]'>
                    <SmallHeading className='mb-[24px]'>
                        Education
                    </SmallHeading>

                    <BorderedBlock>
                        some content
                    </BorderedBlock>
                </div>
            </div>


        </div>
    )
}

export default AboutPage