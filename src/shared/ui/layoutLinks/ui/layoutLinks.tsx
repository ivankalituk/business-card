import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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

                        <motion.span
                            className="
                                absolute
                                left-[0px]
                                bottom-[0px]
                                h-[1px]
                                w-full
                                bg-foreground
                                origin-left
                                scaleX-0
                            "
                            initial={false}
                            animate={{
                                scaleX: isActive ? 1 : 0,
                            }}
                            whileHover={{
                                scaleX: 1,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25,
                                mass: 0.8,
                            }}
                        />
                    </Link>
                );
            })}
        </nav>
    );
};

export default LayoutLinks;