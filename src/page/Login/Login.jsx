import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { BsFacebook,BsLinkedin, BsGoogle } from "react-icons/bs";
const Login = () => {

    const handelLogin = (e) =>{
        e.preventDefault()
        const from = e.target;
        const email = from.email.value
        const password = from.password.value;
        console.log(email,password);
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col gap-9 lg:flex-row">
                    <div className=" mr-11 w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl text-center font-semibold">Login </h1>
                            <form onSubmit={handelLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button ></button>
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='text-center my-6'>Or Sign In with</p>
                            <div className='flex gap-4 text-2xl justify-center'>
                                <BsFacebook className='text-blue-800'/>
                                <BsLinkedin className='text-blue-500'/>
                                <BsGoogle className='text-red-400'/>
                            </div>
                            <p className='my-4 text-center'>Have an account? <Link to='/signup' className='text-orange-500 font-semibold'>Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;