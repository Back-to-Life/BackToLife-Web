import React from 'react';
import {IconContext} from 'react-icons/lib';
import {Link} from 'react-router-dom';
import './Points.css';
import { useTranslation } from 'react-i18next';


function Points() {
    const {t, i18n} = useTranslation();

    return (
        <IconContext.Provider value={{color:'#fff', size: 64}}>
        <div>
        
            <div className="pricing__section">
                <div className="pricing__wrapper">
                
                    <h1 className="pricing__heading">{t('Points.1')}</h1>
                   
                    < div className="pricing__container">
                    <Link to='/' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                <img src='images/cam.svg'/>
                                </div>
                                <h3>{t('Points.2')}</h3>
                                <ul className="pricing__container-features">
                                <br/>
                                    <li>{t('Points.9')}</li>
                                    <li className="li_point">+15 {t('Points.10')}</li>
                                </ul>
                            
                            </div>
                        </Link>
                        <Link to='/' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <img src='images/plastik.svg'/>
                                </div>
                                <h3>{t('Points.3')}</h3>
                                <ul className="pricing__container-features">
                                   <br/>
                                    <li>{t('Points.9')}</li>
                                    <li className="li_point">+13 {t('Points.10')}</li>
                                   
                                </ul>
                               
                            </div>
                        </Link>
                        <Link to='/' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                <img src='images/elektronik.svg'/>
                                </div>
                                <h3>{t('Points.4')}</h3>
                                <ul className="pricing__container-features">
                                <br/>
                                    <li>{t('Points.9')}</li>
                                    <li className="li_point">+11 {t('Points.10')}</li>
                                </ul>
                               
                            </div>
                        </Link>
                        <Link to='/' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                <img src='images/pil.svg'/>
                                </div>
                                <h3>{t('Points.5')}</h3>
                                <ul className="pricing__container-features">
                                <br/>
                                    <li>{t('Points.9')}</li>
                                    <li className="li_point">+9 {t('Points.10')}</li>
                                </ul>
                                
                            </div>
                        </Link>
                        <Link to='/' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                <img src='images/metal.svg'/>
                                </div>
                                <h3>{t('Points.6')}</h3>
                                <ul className="pricing__container-features">
                                <br/>
                                    <li>{t('Points.9')}</li>
                                    <li className="li_point">+7 {t('Points.10')}</li>
                                </ul>
                              
                            </div>
                        </Link>
                        <Link to='/' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                <img src='images/organik.svg'/>
                                </div>
                                <h3>{t('Points.7')}</h3>
                                <ul className="pricing__container-features">
                                <br/>
                                    <li>{t('Points.9')}</li>
                                    <li className="li_point">+5 {t('Points.10')}</li>
                                </ul>
                              
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                <img src='images/kağıt.svg'/>
                                </div>
                                <h3>{t('Points.8')}</h3>
                                <ul className="pricing__container-features">
                                <br/>
                                    <li>{t('Points.9')}</li>
                                    <li className="li_point">+3 {t('Points.10')}</li>
                                </ul>
                                
                            </div>
                        </Link>   
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    );
}

export default Points
