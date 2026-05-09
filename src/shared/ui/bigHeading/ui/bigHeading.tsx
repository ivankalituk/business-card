import type { FC, ReactNode } from "react";

interface Props {
    children: ReactNode
    className?: string
}


const BigHeading: FC <Props> = ({children, className}) => {
    return(
        <div
            className={`
                ${className}
                
                text-foreground
                font-inter
                text-[96px]
                font-[700]
                tracking-tight
                leading-[0.95]
            `}
        >
            {children}
        </div>
    )
}

export default BigHeading