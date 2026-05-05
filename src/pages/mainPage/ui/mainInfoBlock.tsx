import type { FC } from "react";
import { Button } from "../../../shared/ui/button";
import { BorderedBlock } from "../../../shared/ui/borderedBlock";

const MainInfoBlock: FC = () => {
    return(
        <div
            className="
                py-[128px]
                flex flex-col
            "
        >
            <span
                className="
                    text-muted-foreground
                    uppercase
                    font-mono
                    tracking-[0.25em]
                    text-[12px]
                    leading-[1rem]
                    mb-[24px]
                "
            >
                junior fullstack developer
            </span>

            <span
                className="
                    text-foreground
                    font-inter
                    text-[96px]
                    font-[700]
                    tracking-tight
                    leading-[0.95]
                    mb-[32px]
                "
            >
                Ivan Kalitiuk
            </span>

            <span
                className="
                    text-muted-foreground
                    font-inter
                    text-[20px]
                    mb-[40px]
                    max-w-[600px]
                    leading-[28px]
                "
            >
                Crafting digital experiences at the intersection of design and engineering
            </span>

            <div
                className="
                    flex
                    gap-[16px]
                "
            >
                <Button type="WHITE">View Works</Button>
                <Button type="BLACK">About Me</Button>
            </div>
            
            <BorderedBlock />
        </div>
    )
}

export default MainInfoBlock