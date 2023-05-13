import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../page/Shared/Footer/Footer';
import Navbar from '../page/Shared/Navbar/Navbar';

const Mani = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Mani;