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
                mt-[128px] mb-[208px]
                flex gap-[32px]
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