import type { FC } from "react";
import { BorderedBlock } from "../../../shared/ui/borderedBlock";
import { BorderedBlockHeading } from "../../../shared/ui/borderedBlockHeading";
import { SecondaryText } from "../../../shared/ui/secondaryText";
import { Mail, MapPin, Phone } from "lucide-react";

const AboutPageContacts: FC = () =>{
    return(
        <BorderedBlock>
            <BorderedBlockHeading name='Contact' />

                <div className='grid grid-cols-2 gap-[16px]'>
                    <SecondaryText className='flex gap-[12px] items-center text-[14px] py-[8px]'>
                        <Mail width={14} height={14}/>
                        <span>Some content</span>
                    </SecondaryText>

                    <SecondaryText className='flex gap-[12px] items-center text-[14px] py-[8px]'>
                        <Phone width={14} height={14}/>
                        <span>Some content</span>
                    </SecondaryText>

                    <SecondaryText className='flex gap-[12px] items-center text-[14px] py-[8px]'>
                        <MapPin width={14} height={14}/>
                        <span>Some content</span>
                    </SecondaryText>
                </div>
        </BorderedBlock>
    )
}

export default AboutPageContacts