import { Link } from 'react-router-dom'
import '../../../shared/globals.css'

const Header = () => {

    const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Works', path: '/works' },
    { label: 'About', path: '/about' },
    ];


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

            <div className="md:flex items-center gap-10">
            {navLinks.map((link) => (
                <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 py-2 group ${
                    location.pathname === link.path
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                >
                {link.label}
                <span
                    className={`absolute bottom-0 left-0 h-px bg-foreground transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                />
                </Link>
            ))}
            </div>
        </header>
    )
}

export default Header