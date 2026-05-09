import avatar from '../../../shared/assets/images/avatarSample.png'

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

            {/* Aavatar sticky block */}
            <div
                className="
                    max-w-[300px]
                    sticky
                    top-[60px]
                    self-start
                "
            >
                <img 
                    src={avatar} 
                    alt="avatar" 
                    
                    className="
                        w-[100%]
                        h-[1]
                        object-cover
                        overflow-hidden
                        vessel-shadow 
                        glass-border 
                        rounded-[16px]
                        overflow-hidden
                    "
                />

                <div>LINKS</div>

            </div>

            {/* CONTENT BLOCK */}
            <div
                className="
                    flex-[2]
                    h-[2000px]
                "
            >
                <div>About</div>
                <div>Ivan Kalitiuk</div>
            </div>


        </div>
    )
}

export default AboutPage