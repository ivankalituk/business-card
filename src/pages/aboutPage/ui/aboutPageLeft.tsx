import type { FC } from "react";
import avatar from '../../../shared/assets/images/avatarSample.png'

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

            <div>LINKS</div>

        </div>
    )
}

export default AboutPageLeft