import React from 'react';
import styles from 'styles/Navbar.module.scss';

const Navbar = () => {
    return (
        <header className={styles['navbar'] + ' fixed top-0 left-0 right-0 flex items-center bg-white h-[80px] z-10'}>
            <div className="container">
                <div className="flex items-center">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 text-white rounded-full bg-primary flex justify-center items-center font-bold text-xl">
                            C
                        </div>
                        <div className="text-2xl font-bold tracking-wide">Cirhan</div>
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
                        <a className="btn-primary rounded-xl px-6 py-2" href="">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
