import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BtmNav from '../components/BtmNav'
import { useMediaQuery } from "react-responsive";

const Layout = () => {

    const isMobile = useMediaQuery({ maxWidth: 575 });

    const showNavMobile = isMobile ? true : false;

    return (
        <>
            {
                showNavMobile ? (
                    <BtmNav />
                ) : (
                    <Navbar />
                )
            }
            <div className='container mx-auto z-50 mt-10'>
                <Outlet />
            </div>
        </>
    )
}

export default Layout