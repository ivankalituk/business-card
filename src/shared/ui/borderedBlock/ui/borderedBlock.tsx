import type { FC, ReactNode } from "react";

interface Props{
    children?: ReactNode
    className?: string
}


const BorderedBlock: FC <Props> = ({children, className}) => {
    return(
        <div
            className={`
                ${className}

                w-[100%]
                p-[32px]
                bg-card
                rounded-[16px]
                glass-border 
                vessel-shadow 
            `}
        >
            {children}
        </div>
    )
}

export default BorderedBlock