import type { FC } from "react";
import avatar from '../../../shared/assets/images/avatarSample.png'
import { Link } from "react-router-dom";
import { BorderedBlock } from "../../../shared/ui/borderedBlock";
import { SocialIcon } from "../../../shared/helpers/getSocialIcon";

const AboutPageLeft: FC = () => {
    return(
        <div
            className="
                max-w-[300px]
                sticky
                top-[100px]
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

            <div className="flex items-center gap-[16px] mt-[20px]">
                <Link to={'/'} className="text-muted-foreground hover:text-foreground  transition-colors duration-300">
                    <BorderedBlock className="p-[0px] w-[44px] h-[44px] flex items-center justify-center">
                        <div className="w-[22px] h-[22px]">
                            <SocialIcon platform='GitHub'/>
                        </div>
                    </BorderedBlock>
                </Link>

                <Link to={'/'} className="text-muted-foreground hover:text-foreground  transition-colors duration-300">
                    <BorderedBlock className="p-[0px] w-[44px] h-[44px] flex items-center justify-center">
                        <div className="w-[22px] h-[22px]">
                            <SocialIcon platform='LinkedIn'/>
                        </div>
                    </BorderedBlock>
                </Link>
            </div>


            

        </div>
    )
}

export default AboutPageLeft