import type { FC } from "react";
import { Link } from "react-router-dom";
import { SecondaryText } from "../../secondaryText";
import { ExternalLink, FileText } from "lucide-react";

interface Props{
    type: 'GITHUB' | 'TEXT' | 'LINK'
    link: string
}

const DetailedCardLink: FC <Props> = ({type, link}) => {
    return(
        <Link to={link}>
            <SecondaryText
                className="
                    flex gap-[4px]
                    items-center
                    text-[14px]
                    p-[8px]
                "
            >
                {type === 'LINK' && <ExternalLink height={16}/>}
                {type === 'TEXT' && <FileText height={16}/>}
                
                {type === 'LINK' && <span>Live</span>}
                {type === 'GITHUB' && <span>Code</span>}
                {type === 'TEXT' && <span>Document</span>}
            </SecondaryText>
        </Link>
    )
}

export default DetailedCardLink