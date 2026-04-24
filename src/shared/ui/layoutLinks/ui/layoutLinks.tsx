import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";

// mock
const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Works', path: '/works' },
    { label: 'About', path: '/about' },
];


const LayoutLinks: FC = () =>{

    const location = useLocation()

    return(
        <nav
            className="flex gap-[40px]"
        >
            {
                navLinks.map((link) => (
                    <Link 
                        to={link.path}
                        className={`
                            relative
                            flex flex-column
                            font-inter
                            py-[8px]
                            transition-colors duration-300
                            hover:text-foreground
                            text-[14px]
                            leading-[20px]
                            
                            ${location.pathname === link.path? 'text-foreground' : 'text-mforeground'}
                        `}
                    >
                        <span>{link.label}</span>

                        {location.pathname === link.path && <span 
                            className="
                                absolute
                                left-[0px]
                                bottom-[0px]
                                h-[1px]
                                w-full
                                bg-foreground
                            "
                        />}
                    </Link>
                ))
            }
        </nav>
    )
}

export default LayoutLinks