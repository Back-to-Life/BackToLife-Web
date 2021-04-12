import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './HeroSection.css'
import {Fade} from 'react-reveal';
import { useTranslation } from 'react-i18next';

function HeroSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart
}) {
    const {t, i18n} = useTranslation();
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero_section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row" style={{
                        display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>   
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                   <h1 className={lightText ? 'heading': 'heading dark'}>{headline}</h1>
                                       <p className={lightTextDesc ? 'home__hero-subtitle':'home__hero-subtitle dark'}>{description}</p>
                                       <Link to='/signup'>
                                           <Button buttonSize='btn--wide' buttonColor='orange'>{buttonLabel}</Button>
                                       </Link>
                            </div>
                        </div>
                        <div className="col">
                        <Fade right duration={2000}>
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className='home__hero-img'/>
                            </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
