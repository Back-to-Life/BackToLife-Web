import React from 'react'
import {Button} from '../../Button'
import {Link} from 'react-router-dom'
import {Fade} from 'react-reveal';
import './HomeThird.css'
import { useTranslation } from 'react-i18next';

function HomeThird() {
    const {t, i18n} = useTranslation();

    return (
        <div>
            <div className="containerWork">
                <div className="wrapperWork">
                   
                    <div className="wrapperTextWork">
                    <div className="headerWork">
                        <h1>{t('Work.header')}</h1>
                    </div>
                    <div className="textWork">
                        {t('Work.description')}
                    </div>
                    <Fade left duration={2000}>
                    <Link to='/signup'>
                        <Button  className="buttonWork" buttonSize='btn--wide' buttonColor='orange'>{t('Work.button')}</Button>
                    </Link>
                    </Fade>
                   
                   
                    </div>
                    <Fade right duration={2000}>
                    <div className="imgWork">
                        <img src="images/recycle.png" alt=""/>
                    </div>
                    </Fade>
                    
                </div>
           
        </div>
        </div>
    )
}

export default HomeThird
