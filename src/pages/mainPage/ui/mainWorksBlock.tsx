import type { FC } from "react";
import { WorkCard } from "../../../shared/ui/workCard";

const MainWorksBlock: FC = () => {
    return(
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
    )
}

export default MainWorksBlock