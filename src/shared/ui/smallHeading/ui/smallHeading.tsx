import type { FC, ReactNode } from "react";

interface Props {
    children: ReactNode
    className?: string
}

const SmallHeading: FC <Props> = ({children, className}) =>{
    return (
        <div
            className={`
                ${className}

                text-muted-foreground
                uppercase
                font-mono
                tracking-[0.25em]
                text-[12px]
                leading-[1rem]
            `}
        >
            {children}
        </div>
    )
}

export default SmallHeading