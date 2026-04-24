import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Works', path: '/works' },
    { label: 'About', path: '/about' },
];

const LayoutLinks: FC = () => {
    const location = useLocation();

    return (
        <nav className="flex gap-[40px]">
            {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`
                            group
                            relative
                            inline-block
                            py-[8px]
                            font-inter
                            text-[14px]
                            leading-[20px]
                            transition-colors duration-300
                            hover:text-foreground
                            ${isActive ? 'text-foreground' : 'text-mforeground'}
                        `}
                    >
                        {link.label}

                        <span
                            className={`
                                absolute
                                left-[0px]
                                bottom-[0px]
                                h-[1px]
                                w-full
                                bg-foreground

                                origin-left
                                transition-transform duration-250

                                ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                            `}
                        />
                    </Link>
                );
            })}
        </nav>
    );
};

export default LayoutLinks;