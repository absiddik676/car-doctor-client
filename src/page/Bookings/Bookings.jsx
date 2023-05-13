import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Bookings = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default Bookings;