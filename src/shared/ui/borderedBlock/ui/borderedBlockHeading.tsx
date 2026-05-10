import type { FC } from "react";

interface Props {
    name: string
}

const BorderedBlockHeading: FC <Props> = ({name}) => {
    return(
        <div
            className="
                text-[12px]
                font-mono 
                uppercase tracking-[0.2em] 
                text-muted-foreground 
                mb-[16px]
            "
        >
            {name}
        </div>
    )
}

export default BorderedBlockHeading