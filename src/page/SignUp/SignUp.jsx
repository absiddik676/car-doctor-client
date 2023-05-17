import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { BsFacebook,BsLinkedin, BsGoogle } from "react-icons/bs";
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
    const {createUser,googleSignIn} = useContext(AuthContext)
    const handelSignUp = (e) =>{
        e.preventDefault()
        const from = e.target;
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value;
        console.log(email,password);
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handelGoogleLogin  = () =>{
        googleSignIn()
        .then(result => console.log(result))
        .catch(error =>{
            console.log(error);
        })
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
                            <h1 className="text-5xl text-center font-semibold">Sign UP </h1>
                            <form onSubmit={handelSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>
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
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button ></button>
                                    <input className="btn btn-primary" type="submit" value="Sign UP" />
                                </div>
                            </form>
                            <p className='text-center my-6'>Or Sign In with</p>
                            <div className='flex gap-4 text-2xl justify-center'>
                                <BsFacebook className='text-blue-800'/>
                                <BsLinkedin className='text-blue-500'/>
                                <button onClick={handelGoogleLogin}><BsGoogle className='text-red-400'/></button>
                            </div>
                            <p className='my-4 text-center'>Already have an account?  <Link to='/login' className='text-orange-500 font-semibold'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;