import AboutPageLeft from './aboutPageLeft'
import AboutPageMainInfo from './aboutPageMainInfo'
import AboutPageContacts from './aboutPageContacts'
import AboutPageTags from './aboutPageTags'
import AboutPageExperience from './aboutPageExperience'
import AboutPageEducation from './aboutPageEducation'

const AboutPage = () => {
    return(
        <div 
            className="
                relative
                mt-[0px] mb-[208px]
                td:mt-[128px]
                flex gap-[32px]
                flex-col
                td:flex-row
                text-foreground
            "
        >

            <AboutPageLeft />

            <div
                className="
                    flex-[2]
                "
            >

                <AboutPageMainInfo />

                <AboutPageContacts />

                <AboutPageTags />

                <AboutPageExperience />

                <AboutPageEducation />

            </div>


        </div>
    )
}

export default AboutPage