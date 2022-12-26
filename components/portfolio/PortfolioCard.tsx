/* eslint-disable @next/next/no-img-element */
import React from 'react';

const PortfolioCard = () => {
    return (
        <div className="card rounded-md">
            <img
                className="rounded-t-md aspect-[4/3] object-cover object-center"
                src="https://doob.rainbowit.net/images/portfolio/portfolio-03.jpg"
                alt=""
            />

            <div className="px-7 py-7">
                <h5 className="font-bold text-white">Web Design</h5>

                <p className="mt-2">Design</p>
            </div>
        </div>
    );
};

export default PortfolioCard;
