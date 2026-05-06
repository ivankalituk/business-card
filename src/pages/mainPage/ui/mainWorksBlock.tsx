import type { FC } from "react";
import { WorkCard } from "../../../shared/ui/workCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MainWorksBlock: FC = () => {
    return(

        <div
            className="
                mt-[64px]
            "
        >
            <div
                className="
                    text-[12px] 
                    uppercase 
                    tracking-[0.2em] 
                    text-muted-foreground
                    font-mono
                    mb-[12px]
                "
            >
                SELECTED WORKS
            </div>

            <div
                className="
                    flex justify-between
                "
            >
                <div
                    className="
                        mb-[48px]
                        text-[48px] 
                        font-[700]
                        tracking-tight 
                        text-foreground
                    "
                >
                    Featured Projects
                </div>

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