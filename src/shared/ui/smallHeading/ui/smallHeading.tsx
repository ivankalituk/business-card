import type { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    children: ReactNode
    className?: string
}

const SmallHeading: FC <Props> = ({children, className}) =>{
    return (
        <div
            className={twMerge(`
                text-muted-foreground
                uppercase
                font-mono
                tracking-[0.25em]
                text-[12px]
                leading-[1rem]
            `, className)}
        >
            {children}
        </div>
    )
}

export default SmallHeading