import React from 'react';
import parson from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img className='w-3/4 rounded-xl shadow-lg' src={parson} alt="Movie" />
                        <img className='w-1/2 absolute border-8 shadow-lg border-white rounded-md right-5 top-1/2' src={parts} alt="Movie" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h3 className='text-2xl text-orange-500 font-bold'>About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn bg-[#FF3811] mt-5">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;