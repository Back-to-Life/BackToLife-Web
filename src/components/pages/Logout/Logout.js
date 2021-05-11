import React,{useCallback,useContext,useState} from 'react';
import { withRouter, Redirect, useHistory } from "react-router";
import { Link} from 'react-router-dom';
import axios from 'axios'
import './Logout.css'
import { useTranslation } from 'react-i18next';

import {Fade} from 'react-reveal';



export default function Logout() {

const history = useHistory();


async function logout()
{

  let result = await fetch("http://localhost:5000/logout", 
  {
    method: "GET",
    headers: {
        "Authorization":"Baerer " + localStorage.getItem('user-info')
    }
  
  }).then(localStorage.removeItem("user-info")).then(history.push("/"))
  result = await result.json()
console.log("result", result)
}





const [modalState, setModalState] = useState(true)

const toggleModalState = () => {
  setModalState(!modalState)
}
const {t, i18n} = useTranslation();

return (
  <>


  <div className="pop">
    <div className={`modalBackground modalShowing-${modalState}`}>
      <Fade top duration={2000}>
      <div className="modalInner">
        <div className="modalImage">
          <img
            src="images/earthsad.gif"
            alt="modal pic"
          />
        </div>
        <div className="modalText">
          <h2>{t('Popup.header')}</h2>
          <p>
          {t('Popup.text1')}
          <br/><br/> {t('Popup.text2')}
          </p>
          <form action="">
            <button className="outbtn" onClick={logout}>
              <a href="/">
              {t('Popup.logout')}
                </a>
                </button>
          </form>
          <button className="exitButton">
              <Link to="/">
              <span>{t('Popup.exit')}</span> 
              </Link>
            
          </button>
        </div>
      </div>
      </Fade>
    </div>
    
  </div>
  </>
    )
}
