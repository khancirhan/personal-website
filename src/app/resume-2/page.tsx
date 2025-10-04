/* eslint-disable @next/next/no-img-element */
import ResumeBody from '@/components/resume/ResumeBody';
import ResumeHeader from '@/components/resume/ResumeHeader';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FC, ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

const font = Inter({
    subsets: ['latin'],
});

interface IContact {
    email: string;
    phone: string;
    address: string;
    linkedIn: string;
    website: string;
    github: string;
}

interface ISkill {
    title: string;
    values: string[];
}

interface IExperience {
    title: string;
    company: string;
    timeFrame: string;
    location: string;
    imageUrl: string;
    achievements: string[];
}

interface IEducation {
    degree: string;
    school: string;
    timeFrame: string;
    imageUrl: string;
}

interface IProject {
    title: string;
    descriptionList: string[];
    link: string;
    technologiesUsed: string[];
}

const data = {
    name: 'Cirhan Yaqoob',
    designation: 'Lead Software Engineer',
    contact: {
        email: 'khancirhan@gmail.com',
        phone: '+91 9797790498',
        address: 'Srinagar, Jammu & Kashmir',
        linkedIn: 'linkedin.com/in/khancirhan',
        website: 'khancirhan.vercel.app',
        github: 'github.com/khancirhan',
    },
    about: 'Software Engineer & Team Lead with 5+ years of experience architecting and delivering end-to-end software solutions. Skilled in the MERN stack and multiple programming languages, with a strong focus on scalability, performance, and system reliability. Passionate about creating intuitive, user-centric dashboards and platforms that combine clean design with robust functionality. Experienced in leading cross-functional teams, modernizing legacy systems, and driving projects from concept to production deployment.',
    skills: [
        { title: 'Languages', values: ['Typescript', 'Javascript', 'Python', 'Java', 'PHP', 'HTML 5', 'CSS 3'] },
        {
            title: 'Frameworks',
            values: [
                'Express.js',
                'React.js',
                'Next.js',
                'Redux',
                'Angular',
                'Bootstrap',
                'Tailwind CSS',
                'JQuery',
                'Electron.js',
                'Spring Boot',
            ],
        },
        {
            title: 'Databases',
            values: ['MySQL', 'MongoDB'],
        },
        {
            title: 'Technologies',
            values: [
                'GitHub Actions',
                'CI/CD',
                'Docker',
                'Redis',
                'Apache Kafka',
                'AWS Lambda',
                'REST APIs',
                'Microservices',
                'Socket.io',
                'FFMPEG',
            ],
        },
    ],
    experiences: [
        {
            title: 'Lead Software Engineer',
            company: 'Codeus',
            timeFrame: 'Nov 2020 - Present',
            location: 'Srinagar, Jammu & Kashmir',
            imageUrl: '/logos/codeus-logo.svg',
            achievements: [
                'Led and mentored a team of developers, overseeing architecture decisions, code quality, and on-time delivery of key projects.',

                'Designed and optimized scalable database schemas to ensure high performance, maintainability, and efficient data management.',

                'Architected and implemented end-to-end system designs, enabling seamless integration across backend services, frontend applications, and third-party APIs.',

                'Developed CI/CD pipelines and containerized applications using Docker, automating build, test, and deployment workflows to improve release speed, consistency, and scalability.',

                'Streamlined infrastructure and deployment processes, achieving measurable reductions in infrastructure costs and operational overhead.',

                'Migrated legacy web architectures to a modern API-based backend and Single Page Application (SPA) frontend, improving performance and developer productivity.',

                'Built and standardized a shared UI component library, ensuring consistent design language and faster frontend development across projects.',
            ],
        },
        {
            title: 'Junior Java Developer',
            company: 'EMSON UK LTD',
            timeFrame: 'May 2020 - Sep 2020',
            location: 'Remote',
            imageUrl: '',
            achievements: [
                'Developed an Inventory Management System to streamline order processing and shipment workflows across multiple e-commerce platforms including eBay and Amazon.',
                'Developed an order-processing module integrating directly with eBay’s Order and Shipment APIs, enabling automated synchronization of orders and delivery status.',
                'Built a dynamic product catalog module to efficiently manage product listings, updates, and inventory data.',
                'Developed and optimized the frontend using Angular, delivering a responsive and intuitive interface for product management and tracking.',
            ],
        },
    ],
    educations: [
        {
            degree: 'Bachelor of Engineering in Computer Science',
            school: 'University of Kashmir, Hazratbal, Srinagar',
            timeFrame: 'Aug 2015 - Aug 2019',
            imageUrl: '/logos/university-of-kashmir-logo.png',
        },
    ],
    projects: [
        {
            title: 'ProgressCenter',
            descriptionList: [
                'Redesigned a legacy monolithic architecture into a modern, API-driven ecosystem, improving maintainability and scalability.',
                'Co-architected and developed Version 4 of the platform from the ground up, optimizing for performance, modularity, and long-term growth.',
                'Migrated and restructured the database layer, enhancing flexibility, data consistency, and the ability to handle large, complex datasets efficiently.',
                'Implemented advanced caching and query optimization techniques, reducing average response times by up to 50%.',
                'Integrated AI capabilities, enabling smarter insights.',
                'Designed and developed a public API to support third-party integrations and extend platform capabilities.',
                'Established seamless integrations with major construction platforms such as Procore and Autodesk Construction Cloud, significantly expanding the product’s ecosystem and interoperability.',
            ],
            link: '',
            technologiesUsed: [
                'Typescript',
                'React.js',
                'Express.js',
                'Python',
                'MongoDB',
                'AWS Lambda',
                'Docker',
                'Redis',
                'FFMPEG',
            ],
        },
        {
            title: 'Quantam',
            descriptionList: [
                'Engineered a secure and reliable API to seamlessly communicate with Quantum hardware, capable of handling 100GB+ of data per day with minimal latency.',
                'Co-architected the overall system design and data flow, ensuring efficient, fault-tolerant, and horizontally scalable data transfer across distributed nodes.',
                'Developed an optimized database schema for high-volume, concurrent data ingestion and real-time query performance.',
                'Introduced advanced caching and batching mechanisms to improve throughput and reduce API response time by up to 60%.',
                'Built a unified authentication and authorization system, including an SDK for secure, consistent access across multiple internal dashboards.',
            ],
            link: '',
            technologiesUsed: ['Typescript', 'React.js', 'Express.js', 'MongoDB', 'AWS Lambda', 'Docker', 'Redis'],
        },
        {
            title: 'QuantamLive',
            descriptionList: [
                'Designed and implemented a solution to handle real-time live streams from RTSP and RTMP cameras.',
                'Built a flexible streaming pipeline to forward live feeds to multiple destinations seamlessly.',
                'Developed an on-demand recording feature, enabling users to capture and store streams as needed.',
                'Designed solutions to integrate AI with live camera feeds, supporting use cases like analytics, monitoring, and automation.',
            ],
            link: '',
            technologiesUsed: ['MediaMTX', 'FFMPEG', 'Typescript', 'Express.js', 'MongoDB', 'Docker'],
        },
        {
            title: 'Quantam360',
            descriptionList: [
                'Built a system to map and generate navigable paths from 360° images, enhancing spatial visualization.',
                'Developed the frontend viewing experience for interactive virtual tours, including 3D path visualization and real-time comparisons with BIM models.',
                'Designed and implemented AI-driven snag detection features, improving accuracy and efficiency in identifying construction issues.',
            ],
            link: '',
            technologiesUsed: ['SLAM', 'FFMPEG', 'Typescript', 'React.js', 'Three.js', 'React Three Fiber'],
        },
        {
            title: 'AI Audio Transcription Software',
            descriptionList: [
                'Built an application to transcribe audio in multiple languages.',
                'Added support for generating subtitles from transcribed audio.',
                'Implemented a system to organize audio files into folders for easy management.',
                'Integrated Stripe payment gateway to handle subscriptions and transactions.',
            ],
            link: '',
            technologiesUsed: ['Typescript', 'React.js', 'Express.js', 'Python', 'MongoDB'],
        },
        {
            title: 'ProgressGPT',
            descriptionList: [
                'Designed and co-developed a real-time jobsite assistant for construction teams, enabling instant updates, task tracking, and progress reporting.',
            ],
            link: '',
            technologiesUsed: ['Python', 'Typescript', 'React.js'],
        },
        {
            title: 'PeeCee WhatsApp Bot',
            descriptionList: [
                'Developed a WhatsApp Bot API for ProgressCenter to automate interactions and improve user engagement.',
                'Built an SDK with routing functionality similar to Express.js.',
            ],
            link: '',
            technologiesUsed: ['Typescript', 'Express.js', 'Redis', 'MongoDB'],
        },
        {
            title: 'Hizmet Food Delivery',
            descriptionList: [
                'Co-founded a food delivery application serving Kashmir.',
                'Implemented features to track deliveries in real time and improve overall operational workflow.',
            ],
            link: '',
            technologiesUsed: ['Typescript', 'Express.js', 'React.js', 'Flutter', 'MySQL'],
        },
        {
            title: 'HarisaByKilo',
            descriptionList: [
                'Designed and developed the frontend and backend for an online platform delivering Harisa, a traditional Kashmiri delicacy, straight to your doorstep in a simple five-step process.',
                'Built a comprehensive admin panel to manage order assignments, track deliveries, and handle billing operations.',
            ],
            link: 'https://harisabykilo.com',
            technologiesUsed: ['Javascript', 'Angular', 'MongoDB'],
        },
        {
            title: 'KashmirO2',
            descriptionList: [
                'Developed a non-profit platform during the COVID-19 pandemic to provide essential medical oxygen to patients in need.',
                'Designed an intuitive interface to make it easy for users to request oxygen or offer help.',
            ],
            link: 'https://kashmiro2.com',
            technologiesUsed: ['Javascript', 'Express.js', 'Angular', 'MongoDB'],
        },
    ],
};

/* =================================================================================================
 * HeaderSection
 * ===============================================================================================*/

interface HeaderSectionProps {
    heading: string;
    subHeading: string;
}
const HeaderSection = (props: HeaderSectionProps) => {
    return (
        <header>
            <div>
                <h1 className="text-xl font-bold">{props.heading}</h1>
                <div className="text-sm font-medium">{props.subHeading}</div>
            </div>
        </header>
    );
};

/* =================================================================================================
 * SocialSection
 * ===============================================================================================*/

interface SocialSectionProps {
    contact: IContact;
}
const SocialSection = (props: SocialSectionProps) => {
    return (
        <section>
            <div className="py-2 border-t border-b border-gray-300 print:break-inside-avoid">
                <div className="flex flex-wrap justify-between items-center gap-x-4 gap-y-2">
                    <a
                        className="flex items-center gap-2 text-xs"
                        href={'mailto:' + props.contact.email}
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

                        {props.contact.email}
                    </a>

                    <a
                        className="flex items-center gap-2 text-xs"
                        href={'tel:' + props.contact.phone.replace(/\s+/g, '')}
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

                        {props.contact.phone}
                    </a>

                    <a
                        className="flex items-center gap-2 text-xs"
                        href={'https://' + props.contact.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={14}
                            fill="currentColor"
                            className="text-gray-500"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>

                        {props.contact.linkedIn}
                    </a>

                    <a
                        className="flex items-center gap-2 text-xs"
                        href={'https://' + props.contact.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={14}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="text-gray-500"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>

                        {props.contact.github}
                    </a>

                    {/* <a
                        className="flex items-center gap-2 text-xs"
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
                    </a> */}
                </div>
            </div>
        </section>
    );
};

/* =================================================================================================
 * DescriptionSection
 * ===============================================================================================*/

interface DescriptionSectionProps {
    text: string;
}
const DescriptionSection = (props: DescriptionSectionProps) => {
    return (
        <section>
            <div className="text-[0.8rem]">{props.text}</div>
        </section>
    );
};

/* =================================================================================================
 * ExperienceSection
 * ===============================================================================================*/

interface ExperienceSectionProps {
    experiences: IExperience[];
}
const ExperienceSection = (props: ExperienceSectionProps) => {
    return (
        <section>
            <ResumeHeader>Experience</ResumeHeader>

            <ResumeBody className="space-y-4">
                {props.experiences.map((row, i) => (
                    <div key={i} className="">
                        <div className="flex items-center gap-4 print:break-inside-avoid">
                            <div>
                                <div className="text-[0.8rem] font-medium">
                                    {row.company} - <span className="font-normal">{row.location}</span>
                                </div>
                                <div className="font-semibold">{row.title}</div>
                            </div>

                            <div className="ml-auto mt-auto">
                                <div className="text-xs text-gray-500 mb-[2px]">{row.timeFrame}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <ul className="text-[0.8rem] space-y-1 list-disc pl-3 mt-1">
                                {row.achievements.map((a: string, ii: number) => (
                                    <li key={ii} className="print:break-inside-avoid">
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

interface EducationSectionProps {
    educations: IEducation[];
}
const EducationSection = (props: EducationSectionProps) => {
    return (
        <section>
            <ResumeHeader>Education</ResumeHeader>

            <ResumeBody className="space-y-4">
                {props.educations.map((row, i) => (
                    <div key={i}>
                        <div className="flex items-center gap-4">
                            <div>
                                <div className="font-semibold">{row.degree}</div>
                                <div className="text-[0.8rem]">{row.school}</div>
                            </div>

                            <div className="ml-auto mt-auto">
                                <span className="text-xs text-gray-500 mb-[2px]">{row.timeFrame}</span>
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

interface SkillsSectionProps {
    skills: ISkill[];
}
const SkillsSection = (props: SkillsSectionProps) => {
    return (
        <section>
            <ResumeHeader>Technical Skills</ResumeHeader>

            <ResumeBody className="space-y-4">
                {props.skills.map((row, i) => (
                    <div key={i}>
                        <div className="print:break-after-avoid-page">
                            <div className="text-sm font-semibold">{row.title}</div>
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center gap-y-[2px]">
                                {row.values.map((val, ii) => (
                                    <div key={val} className="flex items-center text-[0.8rem] print:break-inside-avoid">
                                        {val}
                                        {ii < row.values.length - 1 && <span className="mx-2 text-[8px]">|</span>}
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

interface ProjectsSectionProps {
    projects: IProject[];
}
const ProjectsSection = (props: ProjectsSectionProps) => {
    return (
        <section>
            <ResumeHeader>Projects</ResumeHeader>

            <ResumeBody className="space-y-4">
                {props.projects.map((row, i) => (
                    <div key={i}>
                        <div className="print:break-after-avoid-page">
                            <div className="font-semibold">{row.title}</div>
                        </div>

                        {row.descriptionList.length > 0 && (
                            <ul className="text-[0.8rem] space-y-1 list-disc pl-3 mt-1">
                                {row.descriptionList.map((a: string, ii: number) => (
                                    <li key={ii} className="print:break-inside-avoid">
                                        {a}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {row.link && (
                            <a
                                href={row.link}
                                target="_blank"
                                className="inline-block text-[0.8rem] text-blue-600 font-medium ml-3 print:[break-before:avoid-page] print:[page-break-before:avoid]"
                            >
                                {row.link}
                            </a>
                        )}

                        {row.technologiesUsed.length > 0 && (
                            <div className="flex items-center gap-1 mt-1 ml-3 print:[break-before:avoid-page] print:[page-break-before:avoid]">
                                <div className="text-sm font-semibold">Technologies Used:</div>

                                <div className="flex flex-wrap items-center gap-y-[2px]">
                                    {row.technologiesUsed.map((val, ii) => (
                                        <div key={val} className="flex items-center text-[0.8rem]">
                                            {val}

                                            {ii < row.technologiesUsed.length - 1 && <span className="mr-1">,</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </ResumeBody>
        </section>
    );
};

/* =================================================================================================
 * PdfViewer
 * ===============================================================================================*/

interface PdfViewerProps {
    children: ReactNode;
}
const PdfViewer = (props: PdfViewerProps) => {
    const { children } = props;

    return (
        <main
            style={
                {
                    // width: '210mm',
                    // height: '297mm',
                }
            }
            className="text-gray-900 bg-white mx-auto px-8 py-7 w-[210mm] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.075),0_-2px_10px_rgba(0,0,0,0.075)] print:px-0 print:py-0 print:w-auto print:rounded-none print:shadow-none"
        >
            {children}
        </main>
    );
};

/* =================================================================================================
 * ResumePage
 * ===============================================================================================*/

export const metadata: Metadata = {
    title: 'Cirhan Yaqoob - Resume',
    description: data.about,
};

const ResumePage = () => {
    return (
        <>
            <div className={twJoin('bg-white p-6 space-y-6 print:p-0 print:space-y-0', font.className)}>
                <PdfViewer>
                    <HeaderSection heading={data.name} subHeading={data.designation} />

                    <div className="mt-4">
                        <SocialSection contact={data.contact} />
                    </div>

                    <div className="mt-4">
                        <DescriptionSection text={data.about} />
                    </div>

                    <div className="mt-5">
                        <ExperienceSection experiences={data.experiences} />
                    </div>

                    <div className="mt-5">
                        <EducationSection educations={data.educations} />
                    </div>

                    <div className="mt-5">
                        <SkillsSection skills={data.skills} />
                    </div>

                    <div className="mt-5">
                        <ProjectsSection projects={data.projects} />
                    </div>
                </PdfViewer>
                {/* 
                <PdfViewer>
                </PdfViewer>

                <PdfViewer>
                    <div>
                        <ProjectsSection projects={data.projects.slice(5, data.projects.length)} />
                    </div>
                </PdfViewer> */}
            </div>
        </>
    );
};

export default ResumePage;
