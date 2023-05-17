import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const navigate =useNavigate()

    const url = `http://localhost:5000/booking?email=${user.email}`
    useEffect(() => {
        fetch(url,{
            method:'GET',
            headers:{
                authorization:`Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json()
                .then(data => {
                    if(!data.error){
                        setBooking(data)
                    }
                    else{
                        navigate('/')
                    }
                }))
    }, [url,navigate])

    const handelDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = booking.filter(book  => book._id !== id)
                            setBooking(remaining)
                        }
                        console.log(data);
                    })


            }
        })
    }

    const handelConfirm = (id) =>{

        fetch(`http://localhost:5000/booking/${id}`,{
            method:'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                const reaming = booking.filter(book => book._id !== id);
                const updated = booking.find(book => book._id === id);
                updated.status = 'confirm';
                const newBooking = [updated, ...reaming];
                setBooking(newBooking);
            }
            console.log(data);
        })
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service</th>
                            <th>Service Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(book => <BookingRow key={book._id}
                                 book={book}
                                  handelDelete={handelDelete}
                                  handelConfirm={handelConfirm}
                                  ></BookingRow>)
                        }
                 
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;