import React, { useEffect, useState } from 'react';
import ServicesCad from './ServicesCad';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('../../../../public/services.json')
        .then(res => res.json())
        .then(data=> setServices(data))
    },[])
    console.log(services);
    return (
        <div>
            <div>
                <h2 className='text-2xl font-semibold text-orange-600 text-center'>Service</h2>
                <h1 className='text-5xl my-3 font-bold text-center'>Our Service Area</h1>
                <p className='text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesCad key={service._id} service={service}></ServicesCad>)
                }
            </div>
        </div>
    );
};

export default Services; 