import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import ServiceTime from '../ServiceTime/ServiceTime';
import Products from '../Products/Products';
import Team from '../Team/Team';



const Home = () => {
    return (
        <div>
           <Banner/>
           <About/>
           <Services/>
           <ServiceTime/>
           <Products/>
           <Team/>
        </div>
    );
};

export default Home;