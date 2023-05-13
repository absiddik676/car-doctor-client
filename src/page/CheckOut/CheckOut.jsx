import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const data = useLoaderData();
    const {user} = useContext(AuthContext)
    const handelBookService = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email= form.email.value;
        const date = form.date.value;
        const  price = form.price.value;

        const oderInfo = {
            userName : name,
            email,
            date,
            price,
            img:data.img,
            service_id: data._id,
            title:data.title
        }
        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(oderInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Your Oder Place successfully',
                    'You clicked the button!',
                    'success'
                  )
                  
            }
        })

        console.log(oderInfo);
    }
    return (
        <div>
            <h2 className='text-3xl font-bold '>Book This Service</h2>
           
                        <div className="card-body">
                           <form onSubmit={handelBookService} action="">
                           <div className='grid grid-cols-2 gap-4'>
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" defaultValue={user?.displayName} placeholder="First Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date </span>
                                </label>
                                <input type="date" placeholder="Last Name" name='date' className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" defaultValue={user?.email} name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due amount</span>
                                </label>
                                <input type="text" defaultValue={'$'+ data.price} name='price' placeholder="password" className="input input-bordered" />
                                
                            </div>
                           </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-block' type="submit" value="Oder Confirm" />
                            </div>
                           </form>
                        </div>
                    </div>
    );
};

export default CheckOut;