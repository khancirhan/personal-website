import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ResumeBodyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}
const ResumeBody: FC<ResumeBodyProps> = (props) => {
    const { children, className, ...rest } = props;

    return (
        <div {...rest} className={twMerge('mt-4', className)}>
            {children}
        </div>
    );
};

export default ResumeBody;
