import type { FC } from "react";
import { WorkCard } from "../../../shared/ui/workCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SmallHeading } from "../../../shared/ui/smallHeading";
import { BigHeading } from "../../../shared/ui/bigHeading";

const MainWorksBlock: FC = () => {
    return(

        <div
            className="
                mt-[64px]
            "
        >

            <SmallHeading className="tracking-[0.2em] mb-[12px]">
                SELECTED WORKS
            </SmallHeading>

            <div
                className="
                    flex justify-between
                "
            >
                <BigHeading className="mb-[48px] text-[48px] tracking-tight ">
                    Featured Projects
                </BigHeading>

                <Link
                    to='/works'
                    className="
                        flex
                        items-center
                        gap-[4px]
                        text-muted-foreground
                        hover:text-foreground
                        transition-colors duration-300 
                    "
                >
                    View all
                    <ArrowRight className="w-[16px] h-[16px]" />
                </Link>
            </div>

            <div
                className="
                    flex
                    flex-col
                    md:flex-row
                    gap-[16px]
                "
            >
                <WorkCard type='SMALL' />
                <WorkCard type='SMALL' />
                <WorkCard type='SMALL' />
            </div>
        </div>
    )
}

export default MainWorksBlock