import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing';
import AppAdd from '../AppAdd/AppAdd';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'
function Home() {
    return (
        <>
           <HeroSection {...homeObjOne}/> 
           <HeroSection {...homeObjThree}/> 
           <HeroSection {...homeObjTwo}/>  
           <Pricing/>
           <AppAdd/>
        </>
    )
}

export default Home;