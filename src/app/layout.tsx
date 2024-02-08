import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Cirhan Yaqoob - Portfolio',
    description:
        "I'm a senior software engineer with over {props.experienceInYears}+ years of experience in wide range of software disciplines. I transform ideas into reality through technology. If you need someone to sprinkle some coding magic on your project, I'm your guy. Let's team up and make some tech dreams a reality!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={montserrat.className}>{children}</body>
        </html>
    );
}
