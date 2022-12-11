import React from 'react';

const ServiceCard = () => {
    return (
        <div className="card card-shadow px-10 pt-12 pb-16 flex flex-col justify-center items-center text-center">
            <div className="w-48 h-48 bg-primary/10 rounded-4xl flex justify-center items-center"></div>

            <h5 className="font-bold mt-10">Web Design</h5>

            <p className="mt-5">We believe direct collaboration with our clients is essential to bringing unique</p>
        </div>
    );
};

export default ServiceCard;
