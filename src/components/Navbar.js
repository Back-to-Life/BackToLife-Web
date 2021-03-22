import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {FaRecycle} from 'react-icons/fa'
import {AiOutlineHome} from 'react-icons/ai'
import {VscServerProcess} from 'react-icons/vsc'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {GoSignIn} from 'react-icons/go'
import {FaRegIdCard} from 'react-icons/fa'
import { FaBars, FaTimes} from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import {IconContext} from 'react-icons/lib'

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

    window.addEventListener('resize',showButton)
    return (
        <>
        <IconContext.Provider value={{color:'#fc9583'}}>
           <div className="navbar">
              <div className="navbar-container container">
                  <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                      <FaRecycle className="navbar-icon"/>
                      Back To Life
                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                      {click ? <FaTimes/> : <FaBars/>}
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className="nav-item">
                          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                              <AiOutlineHome className="navbar-icon"/>
                              Home
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/howtowork' className='nav-links' onClick={closeMobileMenu}>
                              <VscServerProcess className="navbar-icon"/>
                             How To Work
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/points' className='nav-links' onClick={closeMobileMenu}>
                              <AiOutlinePlusCircle className="navbar-icon"/>
                             Points
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/myaccount' className='nav-links' onClick={closeMobileMenu}>
                              <CgProfile className="navbar-icon"/>
                              My Account
                          </Link>
                      </li>
                      <li className="nav-btn">
                          {button ? (
                              <Link to='/signup' className='btn-link'>
                                 
                                  <Button buttonStyle='btn--outline'>
                                  <FaRegIdCard className="navbar-icon"/>
                                      SIGN UP</Button>

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
                                      SIGN IN</Button>

                              </Link>
                          ):(
                              <Link to='/login' className='btn-link' onClick={closeMobileMenu}>
                                  <Button buttonStyle='btn--outline' buttonSize='btn-mobile'>SIGN IN</Button>
                              </Link>
                          )}
                      </li>
                  </ul>
                </div> 
           </div>
           </IconContext.Provider>
        </>
    )
}

export default Navbar
