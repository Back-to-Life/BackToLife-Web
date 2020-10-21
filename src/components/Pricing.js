import React from 'react';
import {IconContext} from 'react-icons/lib';
import {Link} from 'react-router-dom';
import './Pricing.css';

function Pricing() {
    return (
        <IconContext.Provider value={{color:'#fff', size: 64}}>
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">Points by Recycling Types</h1>
                    < div className="pricing__container">
                    <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                <img src='images/cam.svg'/>
                                </div>
                                <h3>Glass Recycling</h3>
                                <ul className="pricing__container-features">
                                <br/>
                                    <li>Points Earned:</li>
                                    <li className="li_point">+15 points</li>
                                </ul>
                                {/* <Button buttonSize='btn--wide' buttonColor='orange'>
                                    Choose plan
                                </Button> */}
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <img src='images/plastik.svg'/>
                                </div>
                                <h3>Plastic Recycling</h3>
                                <ul className="pricing__container-features">
                                   <br/>
                                    <li>Points Earned:</li>
                                    <li className="li_point">+13 points</li>
                                   
                                </ul>
                                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose plan
                                </Button> */}
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                <img src='images/elektronik.svg'/>
                                </div>
                                <h3>Electronic Recycling</h3>
                                <ul className="pricing__container-features">
                                <br/>
                                    <li>Points Earned:</li>
                                    <li className="li_point">+11 points</li>
                                </ul>
                                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose plan
                                </Button> */}
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                <img src='images/pil.svg'/>
                                </div>
                                <h3>Battery Recycling</h3>
                                <ul className="pricing__container-features">
                                <br/>
                                    <li>Points Earned:</li>
                                    <li className="li_point">+9 points</li>
                                </ul>
                                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose plan
                                </Button> */}
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                <img src='images/metal.svg'/>
                                </div>
                                <h3>Metal Recycling</h3>
                                <ul className="pricing__container-features">
                                <br/>
                                    <li>Points Earned:</li>
                                    <li className="li_point">+7 points</li>
                                </ul>
                                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose plan
                                </Button> */}
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                <img src='images/organik.svg'/>
                                </div>
                                <h3>Organic Recycling</h3>
                                <ul className="pricing__container-features">
                                <br/>
                                    <li>Points Earned:</li>
                                    <li className="li_point">+5 points</li>
                                </ul>
                                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose plan
                                </Button> */}
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                <img src='images/kağıt.svg'/>
                                </div>
                                <h3>Paper Recycling</h3>
                                <ul className="pricing__container-features">
                                <br/>
                                    <li>Points Earned:</li>
                                    <li className="li_point">+3 points</li>
                                </ul>
                                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose plan
                                </Button> */}
                            </div>
                        </Link>   
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    );
}

export default Pricing
