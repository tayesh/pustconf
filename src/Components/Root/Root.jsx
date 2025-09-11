import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Upperbanner from '../Shared/Upperbanner';

const Root = () => {
    return (
        <div className='roboto'>
            <Upperbanner></Upperbanner>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;