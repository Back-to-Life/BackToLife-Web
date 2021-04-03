import React from 'react'
import './AppAdd.css'
import {FaApple} from 'react-icons/fa'
import {FaGooglePlay} from 'react-icons/fa'
import {Fade} from 'react-reveal';

function AppAdd() {
    return (
        <div>
            <div className="containerAdd">
                <div className="wrapperAdd">
                    <Fade left duration={2000}><div className="imgAdd">
                        <img src="images/mockup1.png" alt=""/>
                    </div>
                    </Fade>
                    <div className="wrapperText">
                    <div className="headerAdd">
                        <h1>Visit our Mobile App and start earning while recycling</h1>
                    </div>
                    <div className="textAdd">
                    Convert recycling wastes to money in a few steps with a modern and useful interface and contribute to nature!
                    </div>
                    <div className="buttonAndroid">
                        <FaGooglePlay className="icons"/>
                        <a href="https://play.google.com/store?hl=tr">Google Play</a>
                    </div>
                    <div className="buttonApple">
                        <FaApple className="icons"/>
                        <a href="https://www.apple.com/tr/app-store/">App Store</a>
                    </div>
                    </div>
                    
                    
                </div>
           </div>
        </div>
    )
}

export default AppAdd
