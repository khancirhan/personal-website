import React, { FC, ReactNode, useRef } from 'react';
import styles from 'styles/Template1.module.scss';

/**
 * HeaderSection
 */
interface HeaderSectionProps {
    name: string;
    designation: string;
    link: string;
}
const HeaderSection: FC<HeaderSectionProps> = (props) => {
    const { name, designation, link } = props;

    return (
        <section id="header">
            <h3 className="text-3xl tracking-[0.2em] font-bold">{name}</h3>

            <div className="py-3 border-t border-b border-gray-200 mt-6">
                <div className="flex justify-between items-center">
                    <div className="text-sm uppercase tracking-widest font-medium">{designation}</div>
                    <a
                        href={'https://' + link}
                        target="_blank"
                        rel="noreferrer"
                        className="tracking-wider text-gray-500 text-xs"
                    >
                        {link}
                    </a>
                </div>
            </div>
        </section>
    );
};

/**
 * AbooutSection
 */
interface AbooutSectionProps {
    about: string;
}
const AbooutSection: FC<AbooutSectionProps> = (props) => {
    const { about } = props;

    return (
        <section id="about">
            <div className={styles['heading-wrapper']}>
                <div className={styles['heading-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={10}>
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                </div>
                <div className={styles['heading']}>About Me</div>
            </div>
            <div className={[styles['text-para'], 'mt-3'].join(' ')}>{about}</div>
        </section>
    );
};

/**
 * ContactSection
 */
interface ContactSectionProps {
    contact: any;
}
const ContactSection: FC<ContactSectionProps> = (props) => {
    const { contact } = props;

    return (
        <section id="contact">
            <div className={styles['heading-wrapper']}>
                <div className={styles['heading-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={10}>
                        <path d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm96-96c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" />
                    </svg>
                </div>
                <div className={styles['heading']}>Contact</div>
            </div>
            <div className="mt-3">
                <div className="text-sm font-semibold">Address</div>
                <div className={[styles['text-para']].join(' ')}>{contact.address}</div>
            </div>
            <div className="mt-3">
                <div className="text-sm font-semibold">Mobile</div>
                <div className={[styles['text-para']].join(' ')}>{contact.phone}</div>
            </div>
            <div className="mt-3">
                <div className="text-sm font-semibold">Email</div>
                <div className={[styles['text-para']].join(' ')}>{contact.email}</div>
            </div>
            <div className="mt-3">
                <div className="text-sm font-semibold">LinkedIn</div>
                <div className={[styles['text-para']].join(' ')}>{contact.linkedIn}</div>
            </div>
        </section>
    );
};

/**
 * SkillsSection
 */
interface SkillsSectionProps {
    skills: any[];
}
const SkillsSection: FC<SkillsSectionProps> = (props) => {
    const { skills } = props;

    return (
        <section id="skills">
            <div className={styles['heading-wrapper']}>
                <div className={styles['heading-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height={9}>
                        <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3l89.3 89.4-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                    </svg>
                </div>
                <div className={styles['heading']}>Skills</div>
            </div>
            <div className="mt-3">
                {skills.map((skill, i) => (
                    <div key={i} className={i === 0 ? 'mt-3' : 'mt-4'}>
                        <div className="font-semibold">{skill.title}</div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {skill.values.map((s: string) => (
                                <div key={s} className="col-span-1">
                                    <div className={[styles['text-para']].join(' ')}>{s}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* <ul className="space-y-1 text-gray-700 mt-2 list-disc pl-4">
                    <li>Javascript</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>PHP</li>
                </ul> */}
            </div>
        </section>
    );
};

/**
 * ExperienceSection
 */
interface ExperienceSectionProps {
    experiences: any[];
}

const ExperienceSection: FC<ExperienceSectionProps> = (props) => {
    const { experiences } = props;

    return (
        <section id="experience">
            <div className={styles['heading-wrapper']}>
                <div className={styles['heading-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={10}>
                        <path d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96v32V480H128V128 96zM64 96H96V480H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM448 480H416V96h32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z" />
                    </svg>
                </div>
                <div className={styles['heading']}>Experience</div>
            </div>
            {experiences.map((exp, i) => (
                <div key={i} className={i === 0 ? 'mt-3' : 'mt-4'}>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <div className="font-semibold">{exp.title}</div>
                            <div className="text-xs mt-3">{exp.timeFrame}</div>
                        </div>
                        <div className="col-span-2">
                            <div className="font-semibold">{exp.company}</div>
                            <ul className="space-y-2 mt-2">
                                {exp.achievements.map((a: string, ii: number) => (
                                    <li key={ii} className={styles['text-para']}>
                                        {a}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

/**
 * EducationSection
 */
interface EducationSectionProps {
    educations: any[];
}

const EducationSection: FC<EducationSectionProps> = (props) => {
    const { educations } = props;

    return (
        <section id="experience">
            <div className={styles['heading-wrapper']}>
                <div className={styles['heading-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height={9}>
                        <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9V320c0 28.4-10.8 57.7-22.3 80.8-6.5 13-13.9 25.8-22.5 37.6-3.2 4.3-4.1 9.9-2.3 15s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7.3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7-3.2-14.2-7.5-28.7-13.5-42v-24.6c0-30.2 10.2-58.7 27.9-81.5 12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5.8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1l280.6-101c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1c-7.6-2.7-15.6-4.1-23.7-4.1zM128 408c0 35.3 86 72 192 72s192-36.7 192-72l-15.3-145.4L354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6l-142.2-51.4L128 408z" />
                    </svg>
                </div>
                <div className={styles['heading']}>Education</div>
            </div>
            {educations.map((edu, i) => (
                <div key={i} className={i === 0 ? 'mt-3' : 'mt-4'}>
                    <div className="font-semibold">{edu.degree}</div>
                    <div className={[styles['text-para'], 'mt-2'].join(' ')}>{edu.school}</div>
                    <div className="flex items-center justify-between text-xs text-gray-700 mt-2">
                        <div>{edu.timeFrame}</div>
                        <div>{edu.grade}</div>
                    </div>
                </div>
            ))}
        </section>
    );
};

/**
 * ProjectsSection
 */
interface ProjectsSectionProps {
    projects: any[];
}
const ProjectsSection: FC<ProjectsSectionProps> = (props) => {
    const { projects } = props;

    return (
        <section id="projects">
            <div className={styles['heading-wrapper']}>
                <div className={styles['heading-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={10}>
                        <path d="M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z" />
                    </svg>
                </div>
                <div className={styles['heading']}>Projects</div>
            </div>
            {projects.map((proj, i) => (
                <div key={i} className="mt-4">
                    <div className="font-semibold">{proj.title}</div>

                    {proj.descriptionList.length > 0 && (
                        <ul className="space-y-1 text-gray-700 mt-2">
                            {proj.descriptionList.map((d: string, ii: number) => (
                                <li key={ii} className={styles['text-para']}>
                                    {d}
                                </li>
                            ))}
                        </ul>
                    )}

                    {proj.link && (
                        <a
                            href={proj.link}
                            target="_blank"
                            rel="noreferrer"
                            className={[styles['text-para'], 'inline-block font-medium underline mt-1'].join(' ')}
                        >
                            {proj.link}
                        </a>
                    )}
                </div>
            ))}
        </section>
    );
};

/**
 * Template1
 */
interface Template1Props {
    data: any;
}
const Template1: FC<Template1Props> = (props) => {
    const { data } = props;
    const pageRef = useRef(null);

    const renderTemplate = () => {
        const header = <HeaderSection name={data.name} designation={data.designation} link={data.contact.linkedIn} />;

        const gridLeft = [
            <AbooutSection key="about" about={data.about} />,
            <div className="mt-8" key="contact">
                <ContactSection contact={data.contact} />
            </div>,
            <div className="mt-8" key="skills">
                <SkillsSection skills={data.skills} />
            </div>,
        ];

        const gridRight = [
            <ExperienceSection key="experiences" experiences={data.experiences} />,
            <div className="mt-8" key="educations">
                <EducationSection educations={data.educations} />
            </div>,
            <div className="mt-8" key="projects">
                <ProjectsSection projects={data.projects} />
            </div>,
        ];

        const page = (
            <div className={styles['page-wrapper']}>
                <main ref={pageRef} className={styles['page']}>
                    <div>{header}</div>

                    <div className="grid grid-cols-12 gap-12 mt-8">
                        <div className="col-span-4">{gridLeft}</div>
                        <div className="col-span-8">{gridRight}</div>
                    </div>
                </main>
            </div>
        );

        return page;
    };

    return renderTemplate();

    // return (
    //     <main className={styles['page']}>
    //         {/*  */}
    //         <HeaderSection name={data.name} designation={data.designation} link={data.contact.linkedIn} />

    //         {/*  */}
    //         <section id="content" className="mt-8">
    //             <div className="grid grid-cols-12 gap-12">
    //                 {/* Left Side */}
    //                 <div className="col-span-4">
    //                     {/*  */}
    //                     <AbooutSection about={data.about} />
    //                     {/*  */}
    //                     <div className="mt-8">
    //                         <ContactSection contact={data.contact} />
    //                     </div>
    //                     {/*  */}
    //                     <div className="mt-8">
    //                         <SkillsSection skills={data.skills} />
    //                     </div>
    //                 </div>
    //                 {/* Right Side */}
    //                 <div className="col-span-8">
    //                     {/*  */}
    //                     <ExperienceSection experiences={data.experiences} />
    //                     {/*  */}
    //                     <div className="mt-8">
    //                         <EducationSection educations={data.educations} />
    //                     </div>
    //                     {/*  */}
    //                     <div className="mt-8">
    //                         <ProjectsSection projects={data.projects} />
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     </main>
    // );
};

export default Template1;
