import type { FC } from "react";

const BorderedBlockCompany: FC = () => {
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
                    Senior Creative Developer
                </div>

                <div>
                    Freelance
                </div>
            </div>

            <div className="font-mono">2023</div>
        </div>
    )
}

export default BorderedBlockCompany