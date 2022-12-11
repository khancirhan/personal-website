import React from 'react';

const PortfolioCard = () => {
    return (
        <div className="card card-shadow">
            <div className="relative">
                <img
                    className="rounded-t-4xl"
                    src="https://assets.website-files.com/5f68b761049650bd498e2649/5f692087ca2bad9dfe44ad22_image-portfolio-03-designer-template-p-1080.png"
                    alt=""
                />

                <div className="absolute bottom-[-1rem] left-10 bg-white rounded-2xl overflow-hidden">
                    <div className="h-full w-full bg-primary/10 px-6 py-2 text-primary font-semibold">Web App</div>
                </div>
            </div>

            <div className="px-10 pt-9 pb-12">
                <h5 className="font-bold ">Web Design</h5>

                <p className="mt-4">We believe direct collaboration with our clients is essential to bringing unique</p>
            </div>
        </div>
    );
};

export default PortfolioCard;
