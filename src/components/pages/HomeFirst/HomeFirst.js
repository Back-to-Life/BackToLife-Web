import React from 'react'
import {Button} from '../../Button'
import {Link} from 'react-router-dom'
import {Fade} from 'react-reveal';
import './HomeFirst.css'
import { useTranslation } from 'react-i18next';
//import Typical from 'react-typical'

function HomeFirst() {
    const {t, i18n} = useTranslation();

    return (
        <div>
            
            <div className="containerHome">
                <div className="wrapperHome">
                   
                    <div className="wrapperTextHome">
                    <div className="headerHome">
                      
                        <h1>
                        steps={[  t('Home.header'), 
                                   1000,
                                   t('Home.header1'),
                                   1000,
                                   t('Home.header2'),
                                   1000
                                ]}
                        loop={Infinity}
                        wrapper="b"
                    </h1>
                    </div>
                    <div className="textHome">
                    {t('Home.description')}
                    </div>
                                 
                    <Fade left duration={2000}>
                    <Link to='/signup'>
                        <Button className="buttonHome" buttonSize='btn--wide' buttonColor='orange'>{t('Home.button')}</Button>
                    </Link>
                    </Fade>
                    </div>
                    <Fade right duration={2000}>
                    <div className="imgHome">
                        <img src="images/trashHome.png" alt=""/>
                    </div>
                    </Fade>
                    
                </div>
           
        </div>
        </div>
    )
}

export default HomeFirst
