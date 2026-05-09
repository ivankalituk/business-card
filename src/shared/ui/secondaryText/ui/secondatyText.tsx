import type { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    children: ReactNode,
    className?: string
}

const SecondaryText: FC <Props> = ({children, className}) => {
    return(
        <div
            className={twMerge(`
                text-muted-foreground
                font-inter
                text-[20px]
                leading-[28px]
            `, className)}
        >
            {children}
        </div>
    )
}

export default SecondaryText