import type { FC } from "react";
import { BorderedBlock, BorderedBlockHeading } from "../../../shared/ui/borderedBlock";
import { SecondaryText } from "../../../shared/ui/secondaryText";
import { Mail, MapPin, Phone } from "lucide-react";

const AboutPageContacts: FC = () =>{

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("Some text sample")
            alert('copied')
        } catch (err) {
            console.error("Failed to copy", err)
        }
}

    return(
        <BorderedBlock>
            <BorderedBlockHeading name='Contact' />

                <div className='grid grid-cols-2 gap-[16px]' onClick={handleCopy}>
                    <SecondaryText 
                        className='
                            flex gap-[12px] items-center 
                            text-[14px] 
                            py-[8px] 
                            cursor-pointer 
                            hover:text-foreground transition-colors duration-300
                        '
                    >
                        <Mail width={14} height={14}/>
                        <span>Some content</span>
                    </SecondaryText>

                    <SecondaryText 
                        className='
                            flex gap-[12px] items-center 
                            text-[14px] 
                            py-[8px] 
                            cursor-pointer 
                            hover:text-foreground transition-colors duration-300
                        '
                    >
                        <Phone width={14} height={14}/>
                        <span>Some content</span>
                    </SecondaryText>

                    <SecondaryText 
                        className='
                            flex gap-[12px] items-center 
                            text-[14px] 
                            py-[8px] 
                            cursor-pointer 
                            hover:text-foreground transition-colors duration-300
                        '
                    >
                        <MapPin width={14} height={14}/>
                        <span>Some content</span>
                    </SecondaryText>
                </div>
        </BorderedBlock>
    )
}

export default AboutPageContacts