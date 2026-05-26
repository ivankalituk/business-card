import type { FC } from "react";
import { Button } from "../../../shared/ui/button";
import { BorderedBlock, BorderedBlockHeading } from "../../../shared/ui/borderedBlock";
import { BorderedBlockCompany } from "../../../shared/ui/borderedBlockCompany";
import { Tag } from "../../../shared/ui/tag";
import { ArrowRight } from "lucide-react";
import { SmallHeading } from "../../../shared/ui/smallHeading";
import { BigHeading } from "../../../shared/ui/bigHeading";
import { SecondaryText } from "../../../shared/ui/secondaryText";

const MainInfoBlock: FC = () => {
    return(
        <div
            className="
                flex flex-col
            "
        >
            <SmallHeading 
                className="mb-[24px]">
                junior fullstack developer
            </SmallHeading>

            <BigHeading className="mb-[32px] text-[42px] td:text-[96px]">
                Ivan Kalitiuk
            </BigHeading>

            <SecondaryText className="max-w-[600px] mb-[40px] text-[18px] td:text-[20px]">
                Crafting digital experiences at the intersection of design and engineering
            </SecondaryText>

            <div
                className="
                    flex
                    gap-[16px]
                    mb-[64px]
                "
            >
                <Button type="WHITE" className="flex gap-[8px]">
                    View Works
                    <ArrowRight className="w-[16px] h-[16px]" />
                </Button>
                <Button type="BLACK">About Me</Button>
            </div>
            
            <div 
                className="
                    flex
                    flex-col
                    gap-[16px]
                    md:flex-row
                "
            >
                <BorderedBlock className="flex-[3] p-[24px] md:p-[32px]">
                    <BorderedBlockHeading name="Background"/>

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

                    <div
                        className="
                            mt-[20px]
                        "
                    >
                        <Tag name="REACT" />
                    </div>
                </BorderedBlock>
                
                <BorderedBlock className="flex-[2] p-[24px] md:p-[32px]">
                    <BorderedBlockHeading name = "Experience"/>

                    <BorderedBlockCompany />
                    <BorderedBlockCompany />
                    <BorderedBlockCompany />
                    
                </BorderedBlock>
            </div>
        </div>
    )
}

export default MainInfoBlock