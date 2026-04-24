import { Link } from 'react-router-dom'
import '../../../shared/globals.css'
import { LayoutLinks } from '../../../shared/ui/layoutLinks';

const Header = () => {

    return(
        <header
            className="
                m-auto
                my-0
                h-[80px]
                max-w-[1184px]
                w-[100%]
                px-[48px]
                flex
                items-center
                justify-between
            "
        >
            <Link to="/" className="flex items-center gap-[5px] group">
                <span 
                    className="
                        w-[7px] h-[7px] 
                        rounded-full 
                        bg-foreground 
                        group-hover:scale-125 
                        transition-transform duration-300
                    " 
                />
                <span className=" text-mforeground font-mono uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Portfolio
                </span>
            </Link>

            <LayoutLinks />
        </header>
    )
}

export default Header