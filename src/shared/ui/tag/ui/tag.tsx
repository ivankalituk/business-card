import type { FC } from "react";

interface Props {
    name: string
}

const Tag: FC <Props> = ({name}) => {
    return(
        <div
            className="
                px-[12px]
                py-[4px]
                rounded-full
                bg-secondary
                flex
                align-center
                justify-around
                w-[fit-content]
                text-foreground
                font-mono
                text-[12px]
            "
        >
            {name}
        </div>
    )
}

export default Tag