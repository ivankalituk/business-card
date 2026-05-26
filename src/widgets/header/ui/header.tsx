import { Link } from 'react-router-dom'
import '../../../shared/globals.css'
import { LayoutLinks } from '../../../shared/ui/layoutLinks';
import { Menu } from 'lucide-react';
import { navLinks } from '../../../mockData';
import { useState } from 'react';

const Header = () => {

    const [burger, setBurger] = useState<boolean>(false)

    return(
        <header
            className="
                z-100
                sticky
                top-[0px]
                bg-background/80 backdrop-blur-[16px]
                mx-auto
                my-0
                max-w-[1184px]
                w-[100%]
            "
        >
            <div 
                className='
                    h-[80px]
                    relative
                    px-[24px]
                    md:px-[48px]
                    flex
                    items-center
                    justify-between
                '
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
                    <span className=" text-muted-foreground font-mono uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        Portfolio
                    </span>
                </Link>

                <LayoutLinks underLines classname='hidden td:flex'/>

                <button 
                    onClick={() => {setBurger(!burger)}}
                    className='
                        flex
                        items-center
                        justify-around
                        p-[8px]
                        td:hidden
                    '
                >
                    <Menu className="w-[24px] h-[24px]" />
                </button>

                {burger && <nav
                    className='
                        absolute
                        top-[80px]
                        left-[0px]
                        w-[100dvw]
                        bg-background
                        p-[24px]
                        z-1000
                        flex flex-col gap-[16px]
                    '
                >
                    {navLinks.map((link) => (
                        <Link
                            to={link.path}
                            onClick={() => setBurger(false)}
                            className="
                                text-foreground
                                py-[12px]
                                block
                            "
                            >
                            {link.label}
                        </Link>
                    ))}
                </nav>}

            </div>
        </header>
    )
}

export default Header