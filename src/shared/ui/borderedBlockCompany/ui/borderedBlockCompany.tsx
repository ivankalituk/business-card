import type { FC } from "react";

interface Props {
    post: string,
    date: string,
    shortDescription: string
}

const BorderedBlockCompany: FC <Props> = ({post, date, shortDescription}) => {
    return(
        <div 
            className="
                flex
                justify-between
                text-muted-foreground
                text-[12px]
                pb-[20px]
                border-b
                border-border
                last:border-b-0
                mt-[20px]
            "
        >
            <div
                className="
                    flex flex-col
                    gap-[6px]    
                "
            >
                <div
                    className="
                        text-foreground
                        text-[14px]
                    "
                >
                    {post}
                </div>

                <div>
                    {shortDescription}
                </div>
            </div>

            <div className="font-mono">{date}</div>
        </div>
    )
}

export default BorderedBlockCompany