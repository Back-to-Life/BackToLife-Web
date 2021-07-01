import React from 'react'
import {Button} from '../../Button/Button'
import {Link} from 'react-router-dom'
import {Fade} from 'react-reveal'
import { useTranslation } from 'react-i18next';
import './HomeSecond.css'

function HomeSecond() {
    const {t, i18n} = useTranslation();

    return (
        <div>
             <div className="containerSave">
                <div className="wrapperSave">
                    <Fade left duration={2000}><div className="imgSave">
                        <img src="images/world.png" alt=""/>
                    </div>
                    </Fade>
                    <div className="wrapperTextSave">
                    <div className="headerSave">
                        <h1>{t('Save.header')}</h1>
                    </div>
                    <div className="textSave">
                    <p> {t('Save.description')} </p>                 
                     </div>
                     <Fade right duration={2000}>
                     <Link to='/signup'>
                        <Button buttonSize='btn--wide' buttonColor='orange'>{t('Save.button')}</Button>
                    </Link>
                     </Fade>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default HomeSecond
