/* eslint-disable jsx-a11y/alt-text */
'use client';
import { Document, PDFViewer, Page, Text, View, Image, Font } from '@react-pdf/renderer';
import { FC } from 'react';

// import poppinsBold from '@/fonts/Poppins/Poppins-Bold.ttf';
// import poppinsMedium from '@/fonts/Poppins/Poppins-Medium.ttf';
// // import poppinsRegular from '@/fonts/Poppins/Poppins-Regular.ttf';
// import poppinsSemiBold from '@/fonts/Poppins/Poppins-SemiBold.ttf';

// Font.register({
//     family: 'Poppins',
//     fonts: [
//         // {
//         //     src: poppinsRegular,
//         // },
//         // {
//         //     src: poppinsMedium,
//         //     fontWeight: 'medium',
//         // },
//         // {
//         //     src: poppinsSemiBold,
//         //     fontWeight: 'semibold',
//         // },
//         // {
//         //     src: poppinsBold,
//         //     fontWeight: 'bold',
//         // },
//     ],
// });

const getPdfFontSize = (fontSize: number) => {
    return fontSize * 0.75;
};

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
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <Image
                style={{
                    width: getPdfFontSize(64),
                    height: getPdfFontSize(64),
                    borderRadius: getPdfFontSize(32),
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
                src="/images/resume-dp.jpeg"
            />

            <View>
                <Text style={{ fontSize: getPdfFontSize(20), fontWeight: 'bold' }}>{data.name}</Text>
                <Text style={{ color: 'gray', fontSize: getPdfFontSize(14), marginTop: getPdfFontSize(2) }}>
                    {data.designation}
                </Text>
            </View>
        </View>
    );
};

interface ResumePdfProps {}
const ResumePdf: FC<ResumePdfProps> = (props) => {
    // const { children, className, ...rest } = props;

    return (
        <div className="flex items-center justify-center">
            <PDFViewer width={792} height={1200} showToolbar={false}>
                <Document>
                    <Page size="A4" style={{ padding: 24 }}>
                        <HeaderSection />
                        {/* <View style={{}}>
                            <Text>
                                Successfully migrated the existing web application architecture to an API-based
                                architecture and Single Page Application (SPA) Assumed full responsibility for project
                                leadership in frontend development and support. Managed all frontend tasks, including
                                creating reusable components, organizing project structure and layout, optimizing
                                performance, and delivering pixel-perfect dashboards. Implemented a library system to
                                ensure UI consistency and facilitate the use of components. Contributed to software
                                database and system design, enhancing overall project effectiveness. Additionally, led
                                numerous other impactful initiatives.
                            </Text>
                        </View>
                        <View style={{}}>
                            <Text>
                                Successfully migrated the existing web application architecture to an API-based
                                architecture and Single Page Application (SPA) Assumed full responsibility for project
                                leadership in frontend development and support. Managed all frontend tasks, including
                                creating reusable components, organizing project structure and layout, optimizing
                                performance, and delivering pixel-perfect dashboards. Implemented a library system to
                                ensure UI consistency and facilitate the use of components. Contributed to software
                                database and system design, enhancing overall project effectiveness. Additionally, led
                                numerous other impactful initiatives.
                            </Text>
                        </View> */}
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    );
};

export default ResumePdf;
