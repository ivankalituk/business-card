import type { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props{
    children?: ReactNode
    className?: string
}


const BorderedBlock: FC <Props> = ({children, className}) => {
    return(
        <div
            className={twMerge(`
                w-[100%]
                p-[32px]
                bg-card
                rounded-[16px]
                glass-border 
                vessel-shadow 
            `, className)}
        >
            {children}
        </div>
    )
}

export default BorderedBlock