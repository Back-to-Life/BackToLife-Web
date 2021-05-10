import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {FaRecycle} from 'react-icons/fa'
import {AiOutlineHome} from 'react-icons/ai'
import {VscServerProcess} from 'react-icons/vsc'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {GoSignIn,GoSignOut} from 'react-icons/go'
import {FaRegIdCard} from 'react-icons/fa'
import { FaBars, FaTimes} from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import {IconContext} from 'react-icons/lib'
import { useTranslation } from 'react-i18next';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton]=useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize',showButton);

    const {t, i18n} = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }

    
    
    return (
        <>
        <IconContext.Provider value={{color:'#fc9583'}}>
           <div className="navbar">
              <div className="navbar-container container">
                  <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                      <FaRecycle className="navbar-icon"/>
                      {t('Navbar.icon')}
                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                      {click ? <FaTimes/> : <FaBars/>}
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className="nav-item">
                          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                              <AiOutlineHome className="navbar-icon"/>
                              {t('Navbar.home')}
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/howtowork' className='nav-links' onClick={closeMobileMenu}>
                              <VscServerProcess className="navbar-icon"/>
                              {t('Navbar.work')}
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/points' className='nav-links' onClick={closeMobileMenu}>
                              <AiOutlinePlusCircle className="navbar-icon"/>
                              {t('Navbar.points')}
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/myaccount' className='nav-links' onClick={closeMobileMenu}>
                              <CgProfile className="navbar-icon"/>
                              {t('Navbar.account')}
                          </Link>
                      </li>
                      <li className="nav-btn">
                          {button ? (
                              <Link to='/signup' className='btn-link'>
                                 
                                  <Button buttonStyle='btn--outline'>
                                  <FaRegIdCard className="navbar-icon"/>
                                  {t('Navbar.up')}</Button>

                              </Link>
                          ):(
                              <Link to='/signup' className='btn-link' onClick={closeMobileMenu}>
                                  <Button buttonStyle='btn--outline' buttonSize='btn-mobile'>SIGN UP</Button>
                              </Link>
                          )}
                      </li>
                      <li className="nav-btn">
                          {button ? (
                              <Link to='/login' className='btn-link' >
                                  <Button buttonStyle='btn--outline'>
                                  <GoSignIn className="navbar-icon"/>
                                  {t('Navbar.in')}</Button>

                              </Link>
                          ):(
                              <Link to='/login' className='btn-link' onClick={closeMobileMenu}>
                                  <Button buttonStyle='btn--outline' buttonSize='btn-mobile'>SIGN IN</Button>
                              </Link>
                          )}
                      </li>
                      <li className="nav-btn">
                          {button ? (
                              <Link to='/logout' className='btn-link' >
                                  <Button  buttonStyle='btn--outline'>
                                  <GoSignOut className="navbar-icon"/>
                                  {t('Navbar.out')}</Button>

                              </Link>
                          ):(
                              <Link to='/logout' className='btn-link' onClick={closeMobileMenu}>
                                  <Button buttonStyle='btn--outline' buttonSize='btn-mobile'>LOG OUT</Button>
                              </Link>
                          )}
                      </li>
                      <a className="languagebuttonTr" onClick={()=>TranslateClick('tr')}><img src="images/turkey.png" alt=""/></a>
                    <a className="languagebuttonEn" onClick={()=>TranslateClick('en')}><img src="images/united-kingdom.png"></img></a>
                  </ul>
                </div> 
           </div>
           </IconContext.Provider>
        </>
    )
}

export default Navbar
