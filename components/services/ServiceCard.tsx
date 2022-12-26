import React from 'react';

const ServiceCard = () => {
    return (
        <div className="card border border-white/10 px-10 py-12">
            <div className="text-primary">
                <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="2.5rem"
                    width="2.5rem"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                    <line x1="8" y1="2" x2="8" y2="18"></line>
                    <line x1="16" y1="6" x2="16" y2="22"></line>
                </svg>
            </div>

            <h5 className="text-white font-bold mt-8">Web Design</h5>

            <p className="mt-4">We believe direct collaboration with our clients is essential to bringing unique</p>
        </div>
    );
};

export default ServiceCard;
