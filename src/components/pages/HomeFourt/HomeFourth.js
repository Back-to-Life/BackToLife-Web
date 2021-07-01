import React from 'react'
import './HomeFourth.css'
import {FaApple} from 'react-icons/fa'
import {FaGooglePlay} from 'react-icons/fa'
import {Fade} from 'react-reveal';
import { useTranslation } from 'react-i18next';

function HomeFourth() {
    const {t, i18n} = useTranslation();

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
                        <h1>{t('Mobile.header')}</h1>
                    </div>
                    <div className="textAdd">
                    {t('Mobile.description')}
                    </div>
                    <Fade right duration={2000}>
                    <div className="buttonAndroid">
                        <FaGooglePlay className="icons"/>
                        <a href="https://play.google.com/store?hl=tr">Google Play</a>
                    </div>
                    </Fade>
                    <Fade right duration={3000}>
                    <div className="buttonApple">
                        <FaApple className="icons"/>
                        <a href="https://www.apple.com/tr/app-store/">App Store</a>
                    </div>
                    </Fade>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default HomeFourth
