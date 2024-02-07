/* eslint-disable @next/next/no-img-element */
import { GithubIcon, LinkedInIcon, MailIcon, PhoneIcon, WhatsappIcon } from '@/components/icons';
import Navbar from '@/components/navigation/Navbar';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import ServiceCard from '@/components/services/ServiceCard';
import styles from '@/styles/Home.module.scss';
import { FC } from 'react';

/* =================================================================================================
 * FixedOverlayGradient
 * ===============================================================================================*/

interface FixedOverlayGradientProps {}
const FixedOverlayGradient: FC<FixedOverlayGradientProps> = () => {
    return (
        <>
            <div className={styles['gradient-left']}></div>

            <div className={styles['gradient-right']}></div>
        </>
    );
};

/* =================================================================================================
 * HeroSection
 * ===============================================================================================*/

interface HeroSectionProps {
    experienceInYears: number;
}
const HeroSection: FC<HeroSectionProps> = (props) => {
    return (
        <section id="home" className="relative min-h-screen pt-[68px]">
            <div
                className="absolute inset-0 bg-no-repeat bg-cover opacity-60"
                style={{ backgroundImage: 'url(/images/hero-bg.svg)' }}
            ></div>

            <div className="container relative">
                <div className="pt-[12vh] md:pt-[20vh] text-center">
                    <h1 className="text-gray-800">
                        Hey! I’m Cirhan Yaqoob <div className="text-primary">Full Stack Developer</div>
                    </h1>

                    <div className="mx-auto max-w-2xl mt-6">
                        <p>
                            I&apos;m a senior software engineer with over {props.experienceInYears}+ years of experience
                            in wide range of software disciplines. I transform ideas into reality through technology.
                        </p>
                    </div>

                    <a className="btn btn-lg border border-gray-800 text-gray-800 mt-16" href="#contact">
                        Say Hello!
                    </a>
                </div>
            </div>
        </section>
    );
};

/* =================================================================================================
 * AboutSection
 * ===============================================================================================*/

interface AboutSectionProps {
    experienceInYears: number;
}
const AboutSection: FC<AboutSectionProps> = (props) => {
    return (
        <section id="about" className="py-16 md:py-40">
            <div className="container">
                <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">
                    <div className="col-span-1">
                        <div className="relative flex">
                            <img
                                crossOrigin="anonymous"
                                className="relative top-12 left-0 w-[48%] lg:w-[60%] rounded-xl aspect-[2/3] object-cover"
                                src="https://images.unsplash.com/photo-1496996317594-95a0cf707af5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                alt=""
                            />

                            <img
                                crossOrigin="anonymous"
                                className="absolute -top-12 right-0 w-[48%] lg:w-[60%] rounded-xl aspect-[2/3] object-cover"
                                src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <h2 className="text-primary">About Me</h2>

                        <div className="mt-5">
                            <p>
                                Hi, I&apos;m Cirhan Yaqoob. I&apos;m a software engineer with over{' '}
                                {props.experienceInYears}+ years of experience in a wide range of software disciplines.
                                I love to code and design software systems, and I have a particular affinity for
                                frontend development and attention to detail.
                            </p>

                            <p className="mt-6">
                                I started my journey with the powerful combo of Spring Boot and Angular, and after a
                                while, I transitioned to React.js and Node.js. So, yeah, I currently work as a MERN
                                stack developer. I love what I do and make sure to stay updated with the latest in tech
                                and programming languages.
                            </p>
                        </div>

                        <div className="mt-12">
                            <h6>You can find me here:</h6>

                            <div className="flex items-center flex-wrap gap-8 mt-6">
                                <a
                                    target="_blank"
                                    href="https://wa.link/tu56p2"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-[#25d366]"
                                >
                                    <div>
                                        <WhatsappIcon width="32" />
                                    </div>

                                    <div className="font-semibold text-base lg:text-lg">Whatsapp</div>
                                </a>

                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/khancirhan"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-[#008AD2]"
                                >
                                    <div>
                                        <LinkedInIcon width="32" />
                                    </div>
                                    <div className="font-semibold text-base lg:text-lg">LinkedIn</div>
                                </a>

                                <a
                                    target="_blank"
                                    href="https://github.com/khancirhan"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-[#02040A]"
                                >
                                    <div>
                                        <GithubIcon width="32" />
                                    </div>

                                    <div className="font-semibold text-base lg:text-lg">Github</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* =================================================================================================
 * ExpertiseSection
 * ===============================================================================================*/

interface ExpertiseSectionProps {}
const ExpertiseSection: FC<ExpertiseSectionProps> = () => {
    return (
        <section id="expertise" className="py-16 md:py-32">
            <div className="container">
                <div className="relative">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-primary">My Expertise</h2>

                            <p className="max-w-2xl mt-5">
                                Leveraging the latest technologies to build cutting-edge applications.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 md:mt-16">
                        <div className="grid grid-cols-3 gap-8">
                            <div className="col-span-3 lg:col-span-1">
                                <ServiceCard
                                    icon={
                                        <svg
                                            stroke="#059dff"
                                            fill="none"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="2.5rem"
                                            width="2.5rem"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                                            <line x1="8" y1="2" x2="8" y2="18"></line>
                                            <line x1="16" y1="6" x2="16" y2="22"></line>
                                        </svg>
                                    }
                                    title="Web Development"
                                    description="Clean, modern & responsive designs - optimized for performance, search engines, and converting users to customers."
                                />
                            </div>

                            <div className="col-span-3 lg:col-span-1">
                                <ServiceCard
                                    icon={
                                        <svg
                                            stroke="#fb5343"
                                            fill="none"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="2.5rem"
                                            width="2.5rem"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                        </svg>
                                    }
                                    title="Database Design"
                                    description="Efficient and effective database design - allowing you to store, retrieve, and analyze data quickly and accurately."
                                />
                            </div>
                            <div className="col-span-3 lg:col-span-1">
                                <ServiceCard
                                    icon={
                                        <svg
                                            stroke="#6549d5"
                                            fill="none"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="2.5rem"
                                            width="2.5rem"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                                        </svg>
                                    }
                                    title="System Design"
                                    description="Identify & Analyze the high-level components that will make up the system and identify common patterns and potential issues."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* =================================================================================================
 * PortfolioSection
 * ===============================================================================================*/

interface PortfolioSectionProps {}
const PortfolioSection: FC<PortfolioSectionProps> = () => {
    return (
        <section id="portfolio" className="pt-16 pb-24 md:pt-32 md:pb-32">
            <div className="container">
                <h2 className="text-primary text-center">My Portfolio</h2>

                <p className="max-w-3xl text-center mx-auto mt-5">
                    Proven track record of delivering successful software projects.
                </p>

                <div className="grid grid-cols-2 gap-8 mt-10 md:mt-20">
                    <div className="col-span-2 lg:col-span-1">
                        <PortfolioCard
                            image={'images/hbk.png'}
                            title={'HarisaByKilo'}
                            description={'Online Hairsa ordering website.'}
                        />
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <PortfolioCard
                            image={'images/hizmet.png'}
                            title={'Hizmet - Food Delivery'}
                            description={'Online food ordering website.'}
                        />
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <PortfolioCard
                            image={'images/ko2.png'}
                            title={'KashmirO2'}
                            description={'Non-profit initiative to bring medical Oxygen to people in need.'}
                        />
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <PortfolioCard
                            image={'images/ruhh.png'}
                            title={'Ruhh'}
                            description={'RTT Consultation website.'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

/* =================================================================================================
 * BannerSection
 * ===============================================================================================*/

interface BannerSectionProps {}
const BannerSection: FC<BannerSectionProps> = () => {
    return (
        <section className="py-6 md:py-12">
            <div className="container">
                <div
                    className={
                        'flex flex-col items-center text-center bg-primary/15 px-9 md:px-14 py-20 rounded-2xl ' +
                        styles['contact-gradient']
                    }
                >
                    <h2 className="text-gray-800">Let’s skyrocket your next project together</h2>

                    <p className=" mt-6">
                        Got a project you would like me to work on? Or how about just a friendly chat?
                    </p>

                    <a className="btn btn-primary btn-lg mt-10" href="#contact">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

/* =================================================================================================
 * FooterSection
 * ===============================================================================================*/

interface FooterSectionProps {}
const FooterSection: FC<FooterSectionProps> = () => {
    return (
        <footer id="contact" className="pt-12 pb-12 mt-10">
            <div className="container">
                <h2 className="text-center text-gray-800">Let’s Talk!</h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
                    <div className="w-[300px]">
                        <a href="tel:+919797790498" className="flex flex-col items-center">
                            <div className="">
                                <PhoneIcon height={32} />
                            </div>
                            <h6 className="font-semibold mt-4">Call me</h6>
                            <p className="mt-2">+91-9797 790498</p>
                        </a>
                    </div>
                    <div className="w-[300px]">
                        <a
                            target="_blank"
                            href="mailto:khancirhan@gmail.com"
                            rel="noreferrer"
                            className="flex flex-col items-center"
                        >
                            <div>
                                <MailIcon height={32} />
                            </div>
                            <h6 className="font-semibold mt-4">Email me</h6>
                            <p className="mt-2">khancirhan@gmail.com</p>
                        </a>
                    </div>
                    <div className="w-[300px]">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/khancirhan"
                            rel="noreferrer"
                            className="flex flex-col items-center"
                        >
                            <div>
                                <LinkedInIcon height={32} />
                            </div>
                            <h6 className="font-semibold mt-4">Follow me</h6>
                            <p className="mt-2">linkedin.com/in/khancirhan</p>
                        </a>
                    </div>
                </div>

                <div className="border-b border-white/10 mt-14"></div>

                <div className="text-center mt-12">All Rights Reserved Cirhan ©</div>
            </div>
        </footer>
    );
};

/* =================================================================================================
 * HomePage
 * ===============================================================================================*/

const HomePage = () => {
    const experienceInYears = new Date().getFullYear() - 2019;

    return (
        <>
            <Navbar />

            <FixedOverlayGradient />

            <HeroSection experienceInYears={experienceInYears} />

            <AboutSection experienceInYears={experienceInYears} />

            <ExpertiseSection />

            <PortfolioSection />

            <BannerSection />

            <FooterSection />
        </>
    );
};

export default HomePage;
