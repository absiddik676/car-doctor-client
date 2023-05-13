import React from 'react';
import team from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Team = () => {
    return (
        <div>
            <h2 className='text-center text-orange-500 text-xl font-semibold'>Team</h2>
            <h1 className='text-4xl py-3 text-center font-bold'>Meet Our Team</h1>
            <p className='text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            <div className='flex gap-8 justify-center mt-6 mb-9'>
                <div className="card w-96 bg-base-100 shadow-md">
                    <div className='bg-[#F3F3F3] '>
                        <figure className="px-10 p-7 pt-10">
                            <img src={team} alt="Shoes" className="rounded-xl " />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-xl  '>Engine Expert</p>
                        <div className='text-3xl flex gap-5'>
                            <BsFacebook className='text-blue-500' />
                            <BsTwitter className='text-blue-300' />
                            <BsLinkedin className='text-blue-700' />
                            <BsInstagram className='text-red-300' />
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-md">
                    <div className='bg-[#F3F3F3] '>
                        <figure className="px-10 p-7 pt-10">
                            <img src={team2} alt="Shoes" className="rounded-xl " />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-xl  '>Engine Expert</p>
                        <div className='text-3xl flex gap-5'>
                            <BsFacebook className='text-blue-500' />
                            <BsTwitter className='text-blue-300' />
                            <BsLinkedin className='text-blue-700' />
                            <BsInstagram className='text-red-300' />
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-md">
                    <div className='bg-[#F3F3F3] '>
                        <figure className="px-10 p-7 pt-10">
                            <img src={team3} alt="Shoes" className="rounded-xl " />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-xl  '>Engine Expert</p>
                        <div className='text-3xl flex gap-5'>
                            <BsFacebook className='text-blue-500' />
                            <BsTwitter className='text-blue-300' />
                            <BsLinkedin className='text-blue-700' />
                            <BsInstagram className='text-red-300' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;