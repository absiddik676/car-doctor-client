import React from 'react';
import { BsFillClockFill , BsFillTelephoneFill} from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const ServiceTime = () => {
    return (
        <div className='bg-[#151515] flex justify-around mt-16 py-12'>
            <div className='flex items-center text-white gap-3'>
                <BsFillClockFill className='text-3xl'/>
                <div>
                    <p>We are open monday-friday</p>
                    <h1 className='text-2xl'>7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className='flex items-center text-white gap-3'>
                <BsFillTelephoneFill className='text-3xl'/>
                <div>
                    <p>Have a question?</p>
                    <h1 className='text-2xl'>+2546 251 2658</h1>
                </div>
            </div>
            <div className='flex items-center text-white gap-3'>
                <HiLocationMarker className='text-3xl text-white'/>
                <div>
                    <p>Need a repair? our address</p>
                    <h1 className='text-2xl'>Liza Street, New York</h1>
                </div>
            </div>
        </div>
    );
};

export default ServiceTime;