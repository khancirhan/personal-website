import React, { FC } from 'react';

interface ServiceCardProps {
    icon: any;
    title: string;
    description: string;
}
const ServiceCard: FC<ServiceCardProps> = (props) => {
    const { icon, title, description } = props;

    return (
        <div className="bg-white rounded-xl card-shadow px-10 py-12 h-full">
            <div className="text-primary">{icon}</div>

            <h5 className="text-gray-800 font-bold mt-8">{title}</h5>

            <p className="mt-4">{description}</p>
        </div>
    );
};

export default ServiceCard;
