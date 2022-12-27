import React, { FC, useState } from 'react';
import styles from 'styles/Navbar.module.scss';

interface HamburgerMenuProps {
    isOpen: boolean;
    toggleOpen: () => void;
}
const HamburgerMenu: FC<HamburgerMenuProps> = (props) => {
    const { isOpen, toggleOpen } = props;

    return (
        <div className={[styles['hamburger-menu'], isOpen ? styles['open'] : ''].join(' ')} onClick={toggleOpen}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        {
            name: 'Home',
            href: '#home',
        },
        {
            name: 'About',
            href: '#about',
        },
        {
            name: 'My Expertise',
            href: '#expertise',
        },
        {
            name: 'My Portfolio',
            href: '#portfolio',
        },
    ];

    return (
        <>
            <header
                className={
                    'fixed top-0 left-0 right-0 flex items-center bg-dark h-[80px] border-b border-white/10 z-[11]'
                }
            >
                <div className="container">
                    <div className="flex items-center">
                        <div className="flex items-center gap-2">
                            <div className="h-[42px] w-[42px] rounded-full bg-gradient flex justify-center items-center">
                                <div className="h-[32px] w-[32px] rounded-full bg-dark text-white flex justify-center items-center font-black text-xl">
                                    C
                                </div>
                            </div>
                            <div className="text-white text-2xl font-bold tracking-wide">Cirhan</div>
                        </div>

                        <div className="ml-auto lg:hidden">
                            <HamburgerMenu isOpen={isOpen} toggleOpen={() => setIsOpen((v) => !v)} />
                        </div>

                        <div className="ml-auto hidden lg:block">
                            <div className="flex items-center gap-10">
                                {links.map((l) => (
                                    <a key={l.href} className="font-medium" href={l.href}>
                                        {l.name}
                                    </a>
                                ))}
                                <a
                                    className="bg-gradient text-black font-medium rounded-full px-6 py-2 hover:brightness-110"
                                    href="#contact"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Menu form smaller screens */}
            <div
                className={[
                    'fixed top-[80px] left-0 w-full bg-dark border-b border-white/10 z-[10] lg:hidden',
                    styles['nav-sidemenu'],
                    isOpen ? styles['open'] : '',
                ].join(' ')}
            >
                <div className="container">
                    <div className="flex flex-col items-start gap-10 pt-8 pb-10">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                className="w-full font-medium"
                                href={l.href}
                                onClick={() => setIsOpen(false)}
                            >
                                {l.name}
                            </a>
                        ))}
                        <a
                            className="bg-gradient text-black font-medium rounded-full px-6 py-2 hover:brightness-110"
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
