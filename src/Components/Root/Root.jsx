import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Upperbanner from '../Shared/Upperbanner';
import Marque from '../Shared/Marque';

const Root = () => {
    
    return (
        <div className='roboto'>
            <Upperbanner></Upperbanner>
            <Navbar></Navbar>
            <Marque></Marque>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;