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
                    mb-[64px]
                "
            >
                <Button type="WHITE">View Works</Button>
                <Button type="BLACK">About Me</Button>
            </div>
            
            <div 
                className="
                    flex
                    gap-[16px]
                "
            >
                <BorderedBlock className="flex-[3]">
                    <div
                        className="
                            text-[12px]
                            font-mono 
                            uppercase tracking-[0.2em] 
                            text-muted-foreground 
                            mb-[16px]
                        "
                    >
                        Background
                    </div>

                    <div
                        className="
                            text-base 
                            text-muted-foreground 
                            leading-[1.625]
                        "
                    >
                        I'm a creative developer with 8+ years of experience 
                        building high-end digital products. My work spans 
                        enterprise dashboards, design systems, and experimental 
                        web experiences. I believe in the power of thoughtful 
                        design paired with robust engineering to create 
                        products that truly resonate.
                    </div>

                    {/* <div className="text-foreground">TAG LIST</div> */}
                </BorderedBlock>
                
                <BorderedBlock className="flex-[2]">
                    <div
                        className="
                            text-[12px]
                            font-mono 
                            uppercase tracking-[0.2em] 
                            text-muted-foreground 
                            mb-[16px]
                        "
                    >
                        Experience
                    </div>

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
                    
                </BorderedBlock>
            </div>
        </div>
    )
}

export default MainInfoBlock