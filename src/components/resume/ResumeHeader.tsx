import { FC, ReactNode } from 'react';

interface ResumeHeaderProps {
    children: ReactNode;
}
const ResumeHeader: FC<ResumeHeaderProps> = (props) => {
    const { children } = props;

    return (
        <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
            <div className="text-sm font-bold uppercase tracking-wider">{children}</div>
        </div>
    );
};

export default ResumeHeader;
