/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';

interface PortfolioCardProps {
    title: string;
    description: string;
    imageUrl: string;
    rgbColor: string;
}
const PortfolioCard: FC<PortfolioCardProps> = (props) => {
    const { title, description, imageUrl, rgbColor } = props;

    return (
        <div className="bg-white rounded-2xl card-shadow h-full">
            <img
                className="rounded-t-2xl aspect-[4/3] object-contain"
                style={{ backgroundColor: `rgb(${rgbColor}/10%)` }}
                src={imageUrl}
                alt=""
            />

            <div className="px-8 py-8">
                <h5 className="font-bold text-gray-800" style={{ color: `rgb(${rgbColor})` }}>
                    {title}
                </h5>

                <p className="mt-2">{description}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;
