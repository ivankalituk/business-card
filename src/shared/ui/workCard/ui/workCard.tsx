import type { FC } from "react";
import sampleImage from '../../../assets/images/amar-guillen-photographiing-death-valley.jpg'


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
        </div>
    )
}

export default WorkCard