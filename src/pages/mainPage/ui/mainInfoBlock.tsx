import type { FC } from "react";
import { Button } from "../../../shared/ui/button";
import { BorderedBlock, BorderedBlockHeading } from "../../../shared/ui/borderedBlock";
import { BorderedBlockCompany } from "../../../shared/ui/borderedBlockCompany";
import { Tag } from "../../../shared/ui/tag";
import { ArrowRight } from "lucide-react";
import { SmallHeading } from "../../../shared/ui/smallHeading";
import { BigHeading } from "../../../shared/ui/bigHeading";
import { SecondaryText } from "../../../shared/ui/secondaryText";
import { personalData, personalExperience } from "../../../mockData";
import { Link } from "react-router-dom";

const MainInfoBlock: FC = () => {
    return(
        <div
            className="
                flex flex-col
            "
        >
            <SmallHeading 
                className="mb-[24px]">
                {personalData.post}
            </SmallHeading>

            <BigHeading className="mb-[32px] text-[42px] td:text-[96px]">
                {personalData.name}
            </BigHeading>

            <SecondaryText className="max-w-[600px] mb-[40px] text-[18px] td:text-[20px]">
                {personalData.shortDescription}
            </SecondaryText>

            <div
                className="
                    flex
                    gap-[16px]
                    mb-[64px]
                "
            >
                <Link to='/works'>
                    <Button type="WHITE" className="flex gap-[8px]">
                        View Works
                        <ArrowRight className="w-[16px] h-[16px]" />
                    </Button>
                </Link>
                <Link to='/about'>
                    <Button type="BLACK">About Me</Button>
                </Link>
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
                        {personalData.description}
                    </div>

                    <div
                        className="
                            mt-[20px]
                            flex flex-wrap gap-[8px]
                        "
                    >
                        {personalData.tags.map((tag) => (
                            <Tag name={tag} />
                        ))}
                    </div>
                </BorderedBlock>
                
                <BorderedBlock className="flex-[2] p-[24px] md:p-[32px]">
                    <BorderedBlockHeading name = "Experience"/>


                    {personalExperience.map((item) => (
                        <BorderedBlockCompany date={item.date} post={item.post} shortDescription={item.shortDescription}/>
                    ))}

                    
                </BorderedBlock>
            </div>
        </div>
    )
}

export default MainInfoBlock