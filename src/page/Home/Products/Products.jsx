import React from 'react';
import product from '../../../assets/images/products/1.png'
import product2 from '../../../assets/images/products/2.png'
import product3 from '../../../assets/images/products/3.png'
import product4 from '../../../assets/images/products/4.png'
import product5 from '../../../assets/images/products/5.png'
import product6 from '../../../assets/images/products/6.png'
import { AiFillStar } from "react-icons/ai";
const Products = () => {
    return (
        <div className='my-16'>
            <div className='grid grid-cols-3 gap-6 '>
                <div className="card w-96 bg-base-100 shadow-md">
                    <div className='bg-[#F3F3F3] m-5'>
                        <figure className="px-10 p-7 pt-10">
                            <img src={product} alt="Shoes" className="rounded-xl w-40" />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center">

                        <div className='flex gap-3 text-yellow-400 text-xl'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className='text-xl font-bold text-orange-600'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-md">
                    <div className='bg-[#F3F3F3] m-5'>
                        <figure className="px-10 p-7 pt-10">
                            <img src={product2} alt="Shoes" className="rounded-xl w-40" />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center">

                        <div className='flex gap-3 text-yellow-400 text-xl'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className='text-xl font-bold text-orange-600'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-md">
                    <div className='bg-[#F3F3F3] m-5'>
                        <figure className="px-10 p-7 pt-10">
                            <img src={product3} alt="Shoes" className="rounded-xl w-40" />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center">

                        <div className='flex gap-3 text-yellow-400 text-xl'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className='text-xl font-bold text-orange-600'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-md">
                    <div className='bg-[#F3F3F3] m-5'>
                        <figure className="px-10 p-7 pt-10">
                            <img src={product4} alt="Shoes" className="rounded-xl w-40" />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center">

                        <div className='flex gap-3 text-yellow-400 text-xl'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className='text-xl font-bold text-orange-600'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-md">
                    <div className='bg-[#F3F3F3] m-5'>
                        <figure className="px-10 p-7 pt-10">
                            <img src={product5} alt="Shoes" className="rounded-xl w-40" />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center">

                        <div className='flex gap-3 text-yellow-400 text-xl'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className='text-xl font-bold text-orange-600'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-md">
                    <div className='bg-[#F3F3F3] m-5'>
                        <figure className="px-10 p-7 pt-10">
                            <img src={product6} alt="Shoes" className="rounded-xl w-40" />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center">

                        <div className='flex gap-3 text-yellow-400 text-xl'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className='text-xl font-bold text-orange-600'>$20.00</p>
                    </div>
                </div>


            </div>
            <div className='text-center mt-5'>
                <button class="btn btn-outline btn-primary">More Products</button>
            </div>
        </div>
    );
};

export default Products;