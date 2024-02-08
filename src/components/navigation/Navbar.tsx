/* eslint-disable @next/next/no-img-element */
'use client';
import React, { FC, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

/* -------------------------------------------------------------------------------------------------
 * INavLink
 * -----------------------------------------------------------------------------------------------*/

interface INavLink {
    name: string;
    href: string;
}

/* -------------------------------------------------------------------------------------------------
 * useShrinkOnScroll
 * -----------------------------------------------------------------------------------------------*/

const useShrinkOnScroll = (scrollheight: number) => {
    const [hasScrolledpast, setHasScrolledpast] = useState(false);

    useEffect(() => {
        let scrollTimeout: any;

        const handleScroll = (e: any) => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
                scrollTimeout = null;
            }

            setHasScrolledpast(document.documentElement.scrollTop > scrollheight);

            scrollTimeout = setTimeout(handleScroll, 500);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollheight]);

    return hasScrolledpast;
};

/* -------------------------------------------------------------------------------------------------
 * MobileNav
 * -----------------------------------------------------------------------------------------------*/

interface MobileNavProps {
    links: INavLink[];
}
const MobileNav: FC<MobileNavProps> = (props) => {
    const { links } = props;

    const [show, setShow] = useState(false);

    return (
        <>
            <div className="flex lg:hidden justify-between items-center h-full">
                <Link href="/">
                    <img className="h-8" src="/logo.svg" alt="" />
                </Link>

                <button onClick={() => setShow(true)}>
                    <div className="flex flex-col items-center justify-center gap-2 h-5">
                        <div className="w-5 h-[2px] bg-gray-900 rounded"></div>
                        <div className="w-5 h-[2px] bg-gray-900 rounded"></div>
                    </div>
                </button>
            </div>

            {/* Nav Sidebar */}
            <div
                className={twMerge(
                    'block lg:hidden fixed inset-0 w-full h-[calc(100vh-calc(100vh-100%))] bg-[var(--navbar-background-color)] z-[20] transition-transform duration-500',
                    show ? 'translate-x-0' : 'translate-x-[-150%]'
                )}
                onClick={() => setShow(false)}
            >
                <div className="container h-full py-6">
                    <div className="flex items-center justify-between">
                        <img className="h-8" src="/logo.svg" alt="" />

                        <button onClick={() => setShow(false)}>
                            <div className="flex flex-col items-center justify-center gap-2 h-5 ">
                                <div className="w-5 h-[2px] bg-gray-900 rounded rotate-45 translate-y-[5px]"></div>
                                <div className="w-5 h-[2px] bg-gray-900 rounded rotate-[-45deg] translate-y-[-5px]"></div>
                            </div>
                        </button>
                    </div>

                    <ul className="flex flex-col gap-4 mt-8">
                        {links.map((row, i) => (
                            <li key={i}>
                                <Link
                                    className="flex py-2 whitespace-nowrap transition-colors duration-200 hover:text-accent"
                                    href={row.href}
                                >
                                    {row.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

/* -------------------------------------------------------------------------------------------------
 * DesktopNav
 * -----------------------------------------------------------------------------------------------*/

interface DesktopNavProps {
    links: INavLink[];
}
const DesktopNav: FC<DesktopNavProps> = (props) => {
    const { links } = props;

    return (
        <div className="hidden lg:flex justify-between items-center h-full">
            <Link href="/">
                <img className="h-9" src="/logo.svg" alt="" />
            </Link>

            <ul className="flex items-center gap-6">
                {links.map((row, i) => (
                    <li key={i}>
                        <Link
                            className="text-gray-900 font-medium p-2 whitespace-nowrap transition-colors hover:text-primary"
                            href={row.href}
                        >
                            {row.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

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
    {
        name: 'Contact',
        href: '#contact',
    },
    {
        name: 'Resume',
        href: '/resume',
    },
];

const Navbar = () => {
    const shouldShrink = useShrinkOnScroll(32);

    return (
        <>
            <nav
                className={twMerge(
                    'fixed top-0 left-0 right-0 z-10 transition-all duration-[400ms] ease-[cubic-bezier(0.29,0.04,0.26,1.08)]',
                    shouldShrink
                        ? ' bg-white h-[var(--navbar-shrinked-height)] shadow-[rgba(0,0,0,0.1)_0px_-2px_12px_1px]'
                        : 'bg-transparent h-[var(--navbar-height)]'
                )}
            >
                <div className="container h-full">
                    <DesktopNav links={links} />

                    <MobileNav links={links} />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
