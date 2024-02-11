/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import ResumeHeader from '@/components/resume/ResumeHeader';
import ResumeBody from '@/components/resume/ResumeBody';
import { Metadata, Viewport } from 'next';

const data = {
    name: 'Cirhan Yaqoob',
    designation: 'Sr. Product Developer at Codeus',
    contact: {
        email: 'khancirhan@gmail.com',
        phone: '+91 9797790498',
        address: 'Srinagar, Jammu & Kashmir',
        linkedIn: 'linkedin.com/in/khancirhan/',
    },
    about: `Highly motivated senior software engineer with over 4 years of experience specializing in the MERN stack. I have created a wide range of applications with best design practices and optimal performance.`,
    skills: [
        { title: 'Languages', values: ['Javascript', 'Java', 'Python', 'PHP', 'HTML 5', 'CSS 3'] },
        {
            title: 'Frameworks',
            values: [
                'Express.js',
                'React.js',
                'Next.js',
                'Angular',
                'Bootstap',
                'Tailwind CSS',
                'JQuery',
                'Spring Boot',
            ],
        },
        {
            title: 'Databases',
            values: ['MySQL', 'MongoDB'],
        },
        {
            title: 'Other',
            values: ['REST APIs', 'Microservices', 'Socket.io', 'UI/UX'],
        },
    ],
    experiences: [
        {
            title: 'Sr. Product Developer',
            company: 'Codeus IT Solutions Pvt Ltd',
            timeFrame: '11/2020 - Present',
            imageUrl: '/logos/codeus-logo.svg',
            achievements: [
                'Successfully migrated the existing web application architecture to an API-based architecture and Single Page Application (SPA)',
                'Assumed full responsibility for project leadership in frontend development and support.',
                'Managed all frontend tasks, including creating reusable components, organizing project structure and layout, optimizing performance, and delivering pixel-perfect dashboards.',
                'Implemented a library system to ensure UI consistency and facilitate the use of components.',
                'Contributed to software database and system design, enhancing overall project effectiveness.',
                'Additionally, led numerous other impactful initiatives.',
            ],
        },
        {
            title: 'Full Stack Web Developer',
            company: 'Freelancing',
            timeFrame: '04/2020 - Present',
            imageUrl: '/logos/codecrafts-logo.svg',
            achievements: [
                'Co-founded CodeCrafts, an IT company offering comprehensive IT services with my friend.',
                'Developed and oversaw management of the Hizmet Food delivery platform.',
                'Developed KashmirO2 during the COVID-19 pandemic in response to challenges finding oxygen concentrators.',
                'Designed the Speedolearn website using Figma.',
                "Created an order-processing module integrating with Ebay's Order and Shipment APIs using Spring Boot.",
            ],
        },
    ],
    educations: [
        {
            degree: 'Bachelor of Engineering in Computer Science',
            school: 'University of Kashmir, Hazratbal, Srinagar',
            timeFrame: '2015 - 2019',
            imageUrl: '/logos/university-of-kashmir-logo.png',
        },
    ],
    projects: [
        {
            title: 'ProgressCenter',
            descriptionList: [
                'ProgessCenter is an advanced system designed for documenting and monitoring construction site progress. ',
                'It provides real-time access to ongoing work, allowing users to remotely track and share updates across all projects from a single platform',
                'The platform is actively used by industry leaders such as Emaar, Neom, Nakheel, and JLL',
            ],
            link: '',
        },
        {
            title: 'Quantam API & Dashboard',
            descriptionList: [
                'Quantam API & Dashboard streamlines camera unit management and firmware updates.',
                'The Quantam Dashboard empowers users to effortlessly manage camera units, adjust settings, change schedule, and handle billing.',
                'The API facilitates firmware connectivity, enabling seamless image and log uploads, as well as version updates.',
            ],
            link: '',
        },
        {
            title: 'HarisaByKilo',
            descriptionList: [
                "HarisaByKilo is an intuitive online platform facilitating the seamless ordering of Kashmir's delicacy, Harisa, directly to your doorstep in just five simple steps.",
            ],
            link: 'https://harisabykilo.com',
        },
        {
            title: 'Hizmet Food Delivery',
            descriptionList: [
                'Hizmet Food Delivery offered online ordering from 200+ restaurants, making it easy to get your favorite meals delivered.',
            ],
        },
        {
            title: 'KashmirO2',
            descriptionList: [
                'KashmirO2 was a non-profit initiative launched during the COVID-19 pandemic to provide essential medical oxygen to those in need.',
            ],
            link: 'https://kashmiro2.com',
        },
        {
            title: 'Ruhh',
            descriptionList: [
                'Ruhh is an RTT consultation website where users can easily book one-on-one sessions with RTT therapist.',
            ],
            link: 'https://ruhh.org',
        },
    ],
};

/* =================================================================================================
 * HeaderSection
 * ===============================================================================================*/

interface HeaderSectionProps {}
const HeaderSection: FC<HeaderSectionProps> = () => {
    return (
        <header>
            <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                    <div>
                        <img
                            className="w-16 h-16 object-cover object-center rounded-full"
                            src="/images/resume-dp.jpeg"
                            alt=""
                        />
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">{data.name}</h1>
                        <div className="text-gray-600 text-sm mt-[2px]">{data.designation}</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

/* =================================================================================================
 * SocialSection
 * ===============================================================================================*/

interface SocialSectionProps {}
const SocialSection: FC<SocialSectionProps> = () => {
    return (
        <section>
            <div className="py-3 border-t border-b border-gray-200">
                <div className="flex justify-between items-center gap-4">
                    <a
                        className="flex items-center gap-2 text-gray-600 text-xs"
                        href={'mailto:' + data.contact.email}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            className="text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            height={14}
                        >
                            <path
                                fill="currentColor"
                                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48H48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.4 339.2a63.9 63.9 0 01-76.8 0L0 176z"
                            />
                        </svg>

                        {data.contact.email}
                    </a>

                    <a
                        className="flex items-center gap-2 text-gray-600 text-xs"
                        href={'tel:' + data.contact.phone.replace(/\s+/g, '')}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            className="text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            height={14}
                        >
                            <path
                                fill="currentColor"
                                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448 18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                            />
                        </svg>

                        {data.contact.phone}
                    </a>

                    <a
                        className="flex items-center gap-2 text-gray-600 text-xs"
                        href={'https://' + data.contact.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            className="text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            height={14}
                        >
                            <path
                                fill="currentColor"
                                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                            />
                        </svg>

                        {data.contact.linkedIn}
                    </a>
                </div>
            </div>
        </section>
    );
};

/* =================================================================================================
 * DescriptionSection
 * ===============================================================================================*/

interface DescriptionSectionProps {}
const DescriptionSection: FC<DescriptionSectionProps> = () => {
    return (
        <section>
            <div className="text-gray-600 text-sm">{data.about}</div>
        </section>
    );
};

/* =================================================================================================
 * ExperienceSection
 * ===============================================================================================*/

interface ExperienceSectionProps {}
const ExperienceSection: FC<ExperienceSectionProps> = () => {
    return (
        <section>
            <ResumeHeader>Experience</ResumeHeader>

            <ResumeBody className="space-y-6">
                {data.experiences.map((row, i) => (
                    <div key={i} className="">
                        <div className="flex items-center gap-4">
                            <div>
                                <div className="grid place-items-center w-10 h-10 border border-gray-100 rounded-full p-[6px]">
                                    <img className="object-contain" src={row.imageUrl} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold">{row.title}</div>
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-sm font-medium">{row.company}</div>
                                </div>
                            </div>

                            <div className="ml-auto">
                                <span className="text-xs text-gray-600">{row.timeFrame}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div>
                                <div className="w-10 h-10"></div>
                            </div>

                            <ul className="text-gray-600 text-sm space-y-2 list-disc pl-3 mt-3">
                                {row.achievements.map((a: string, ii: number) => (
                                    <li key={ii} className="">
                                        {a}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </ResumeBody>
        </section>
    );
};

/* =================================================================================================
 * EducationSection
 * ===============================================================================================*/

interface EducationSectionProps {}
const EducationSection: FC<EducationSectionProps> = () => {
    return (
        <section>
            <ResumeHeader>Education</ResumeHeader>

            <ResumeBody className="space-y-6">
                {data.educations.map((row, i) => (
                    <div key={i} className="">
                        <div className="flex items-center gap-4">
                            <div>
                                <div className="grid place-items-center w-10 h-10 border border-gray-100 rounded-full p-[6px]">
                                    <img className="object-contain" src={row.imageUrl} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold">{row.degree}</div>
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-sm font-medium">{row.school}</div>
                                </div>
                            </div>

                            <div className="ml-auto">
                                <span className="text-xs text-gray-600">{row.timeFrame}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </ResumeBody>
        </section>
    );
};

/* =================================================================================================
 * SkillsSection
 * ===============================================================================================*/

interface SkillsSectionProps {}
const SkillsSection: FC<SkillsSectionProps> = () => {
    return (
        <section>
            <ResumeHeader>Technical Skills</ResumeHeader>

            <ResumeBody className="space-y-5">
                {data.skills.map((row, i) => (
                    <div key={i} className="grid grid-cols-12 gap-4">
                        <div className="col-span-2">
                            <div className="text-sm font-semibold">{row.title}</div>
                        </div>

                        <div className="col-span-10">
                            <div className="flex flex-wrap items-center gap-y-2">
                                {row.values.map((val, ii) => (
                                    <div key={val} className="flex items-center text-sm font-medium">
                                        {val}
                                        {ii < row.values.length - 1 && <span className="mx-3 text-[8px]">●</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </ResumeBody>
        </section>
    );
};

/* =================================================================================================
 * ProjectsSection
 * ===============================================================================================*/

interface ProjectsSectionProps {}
const ProjectsSection: FC<ProjectsSectionProps> = () => {
    return (
        <section>
            <ResumeHeader>Projects</ResumeHeader>

            <ResumeBody className="space-y-6">
                {data.projects.map((row, i) => (
                    <div key={i} className="">
                        <div>
                            <div className="font-semibold">{row.title}</div>
                        </div>

                        {row.descriptionList.length > 0 && (
                            <ul className="text-gray-600 text-sm space-y-2 list-disc pl-3 mt-3">
                                {row.descriptionList.map((a: string, ii: number) => (
                                    <li key={ii} className="">
                                        {a}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {row.link && (
                            <a
                                href={row.link}
                                target="_blank"
                                className="inline-block text-sm text-blue-600 font-medium mt-3"
                            >
                                {row.link}
                            </a>
                        )}
                    </div>
                ))}
            </ResumeBody>
        </section>
    );
};

/* =================================================================================================
 * ResumePage
 * ===============================================================================================*/

export const metadata: Metadata = {
    title: 'Cirhan Yaqoob - Resume',
    description:
        'Highly motivated senior software engineer with over 4 years of experience specializing in the MERN stack. I have created a wide range of applications with best design practices and optimal performance.',
};

export const viewport: Viewport = {
    initialScale: 1,
    width: 900,
};

const ResumePage = () => {
    return (
        <div className="bg-white p-6 print:p-0">
            <main className="text-gray-800 bg-white mx-auto p-10 w-[792px] min-h-[1122px] shadow-[0_2px_10px_rgba(0,0,0,0.075),0_-2px_10px_rgba(0,0,0,0.075)] print:w-auto print:shadow-none">
                <HeaderSection />

                <div className="mt-6">
                    <SocialSection />
                </div>

                <div className="mt-5">
                    <DescriptionSection />
                </div>

                <div className="mt-8">
                    <ExperienceSection />
                </div>

                <div className="mt-9">
                    <EducationSection />
                </div>

                <div className="mt-9">
                    <SkillsSection />
                </div>

                <div className="mt-9">
                    <ProjectsSection />
                </div>
            </main>
        </div>
    );
};

export default ResumePage;
