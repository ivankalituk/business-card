import type { FC, ReactNode } from "react";

interface Props{
    children?: ReactNode
}


const BorderedBlock: FC <Props> = ({children}) => {
    return(
        <div
            className="
                p-[32px]
                bg-card
                rounded-[16px]
                glass-border 
                vessel-shadow 
            "
        >
            {children}
        </div>
    )
}

export default BorderedBlock