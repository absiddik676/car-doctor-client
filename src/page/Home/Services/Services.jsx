import React, { useEffect, useRef, useState } from 'react';
import ServicesCad from './ServicesCad';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, seTAsc] = useState(true)
    const serchRef = useRef(null)
    const [search,setSearch] = useState('')
    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&sort=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc,search])


    const handelSearch = (e) =>{
        setSearch(serchRef.current.value);
    }


    console.log(services);
    return (
        <div>
            <div>
                <h2 className='text-2xl font-semibold text-orange-600 text-center'>Service</h2>
                <h1 className='text-5xl my-3 font-bold text-center'>Our Service Area</h1>
                <p className='text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

                <div className="form-control">
                    <div className="input-group">
                        <input ref={serchRef} type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={handelSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='btn secondary mt-6' onClick={() => seTAsc(!isAsc)}>{isAsc ? 'Low to  High' : 'Price hight to  low '}</button>
                </div>
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