import React from 'react'
import Navbar from '../../Navbar';
import Pricing from '../../Pricing';
import AppAdd from '../AppAdd/AppAdd';
import HomeFirst from '../HomeFirst/HomeFirst';
import HomeSecond from '../HomeSecond/HomeSecond';
import HomeThird from '../HomeThird/HomeThird';
function Home() {
    return (
        <>
        <Navbar/>
           <HomeFirst/>
           <HomeSecond/>
           <HomeThird/>
           <Pricing/>
           <AppAdd/>
        </>
    )
}

export default Home;