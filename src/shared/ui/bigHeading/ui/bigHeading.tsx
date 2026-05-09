import type { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    children: ReactNode
    className?: string
}


const BigHeading: FC <Props> = ({children, className}) => {
    return(
        <div
            className={twMerge(`               
                text-foreground
                font-inter
                text-[96px]
                font-[700]
                tracking-tight
                leading-[0.95]
            `, className)}
        >
            {children}
        </div>
    )
}

export default BigHeading