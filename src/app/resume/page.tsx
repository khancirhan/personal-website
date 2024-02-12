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
        website: 'khancirhan.vercel.app',
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
            title: 'Junior Java Developer',
            company: 'EMSON - UK LTD',
            timeFrame: '05/2020 - 08/2020',
            imageUrl: '',
            achievements: [
                'Worked on Inventory Management System that streamlines order processing and shipment from various platforms such as Ebay and Amazon.',
                "Created an order-processing module that integrates with Ebay's Order and Shipment APIs.",
                'Created a product catalog module for adding and listing all products.',
                'Developed the frontend in Angular for product listing.',
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
                        href={'https://' + data.contact.website}
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
                                d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64h185.4c2.2 20.4 3.3 41.8 3.3 64zm28.8-64h123.1c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6 78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7 10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5 11.6 26 20.9 58.2 27 94.7zm-209 0H18.6c30-74.1 93.6-130.9 172-151.6-25.5 34.2-45.3 87.7-55.3 151.6zM8.1 192h123.1c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zm186.6 254.6c-11.6-26-20.9-58.2-27-94.6h176.6c-6.1 36.4-15.5 68.6-27 94.6-10.5 23.6-22.2 40.7-33.5 51.5-11.2 10.7-20.5 13.9-27.8 13.9s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6-78.4-20.7-142-77.5-172-151.6h116.7zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6 25.5-34.2 45.2-87.7 55.3-151.6h116.6z"
                            />
                        </svg>

                        {data.contact.website}
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
                                    {row.imageUrl ? (
                                        <img className="object-contain" src={row.imageUrl} alt="" />
                                    ) : (
                                        <div className="font-semibold">{row.company[0]}</div>
                                    )}
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
