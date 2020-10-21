import React from 'react'
import Pricing from '../../Pricing'
import {homeObjTwo} from './Data'
import HeroSection from '../../HeroSection'

function Points() {
    return (
        <> 
          <Pricing/>
         <HeroSection {...homeObjTwo}/> 
        </>
    );
}

export default Points;
