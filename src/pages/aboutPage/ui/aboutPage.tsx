import avatar from '../../../shared/assets/images/avatarSample.png'
import { BigHeading } from '../../../shared/ui/bigHeading'
import { SmallHeading } from '../../../shared/ui/smallHeading'

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
            </div>


        </div>
    )
}

export default AboutPage