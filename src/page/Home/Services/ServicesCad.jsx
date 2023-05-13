import React from 'react';

const ServicesCad = ({ service }) => {
    const { img, title, price } = service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl w-full" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>$ {price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCad;