import React from 'react'
import AppAdd from '../AppAdd/AppAdd';
import HomeFirst from '../HomeFirst/HomeFirst';
import HomeSecond from '../HomeSecond/HomeSecond';
import HomeThird from '../HomeThird/HomeThird';
import Points from '../Points/Points';
function Home() {
    return (
        <>
           <HomeFirst/>
           <HomeSecond/>
           <HomeThird/>
           <Points/>
           <AppAdd/>
        </>
    )
}

export default Home;