import React from 'react';
import styles from 'styles/Navbar.module.scss';

const Navbar = () => {
    return (
        <header
            className={'fixed top-0 left-0 right-0 flex items-center bg-dark h-[80px] border-b border-white/10 z-10'}
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
                    <div className="ml-auto flex items-center gap-10">
                        <a className="font-medium" href="">
                            Home
                        </a>
                        <a className="font-medium" href="">
                            About
                        </a>
                        <a className="font-medium" href="">
                            Process
                        </a>
                        <a className="font-medium" href="">
                            Blog
                        </a>
                        <a className="font-medium" href="">
                            Services
                        </a>
                        <a className="bg-gradient text-white font-medium rounded-full px-6 py-2" href="">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
