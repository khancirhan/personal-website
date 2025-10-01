import { FC, ReactNode } from 'react';

interface ResumeHeaderProps {
    children: ReactNode;
}
const ResumeHeader: FC<ResumeHeaderProps> = (props) => {
    const { children } = props;

    return (
        <div className="flex items-center gap-2 border-b border-gray-300 pb-1">
            <div className="text-[0.8rem] font-bold uppercase tracking-wider">{children}</div>
        </div>
    );
};

export default ResumeHeader;
