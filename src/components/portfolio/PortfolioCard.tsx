/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';

interface PortfolioCardProps {
    image: string;
    title: string;
    description: string;
}
const PortfolioCard: FC<PortfolioCardProps> = (props) => {
    return (
        <div className="bg-white rounded-2xl card-shadow h-full">
            <img className="rounded-t-2xl aspect-[4/3] object-cover object-center" src={props.image} alt="" />

            <div className="px-8 py-8">
                <h5 className="font-bold text-gray-800">{props.title}</h5>

                <p className="mt-2">{props.description}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;
