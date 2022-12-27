import React, { FC } from 'react';

interface ServiceCardProps {
    icon: any;
    title: string;
    description: string;
}
const ServiceCard: FC<ServiceCardProps> = (props) => {
    return (
        <div className="card border border-white/10 px-10 py-12 h-full">
            <div className="text-primary">{props.icon}</div>

            <h5 className="text-white font-bold mt-8">{props.title}</h5>

            <p className="mt-4">{props.description}</p>
        </div>
    );
};

export default ServiceCard;
