import React, { useCallback, useContext, useState } from 'react';
import { withRouter, Redirect, useHistory } from "react-router";
import { Link } from 'react-router-dom';
import './Logout.css'
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-reveal';

//console.log("token:", token);
export default function Logout() {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const [modalState, setModalState] = useState(true)

  async function logout() {

    /*let token = localStorage.getItem('user-info').split(',')[1].split(':')[1].split('"')[1].toString()
    alert(token);*/
    const token = localStorage.getItem('user-info').split(',')[1].split(':')[1].split('" "')[0]



    let result = await fetch("http://localhost:5000/logout",
      {
        method: "GET",
        headers: {
          "Authorization": "Baerer " + localStorage.getItem('user-info').split(',')[1].split(':')[1].split('"')[1].toString()

        },




      }).then(localStorage.removeItem("user-info"))
      .then(history.push("/home"))
    result = await result.json()
    console.log("result", result)

  }

  const toggleModalState = () => {
    setModalState(!modalState)

  }
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
                  <br /><br /> {t('Popup.text2')}
                </p>
                <form action="">
                  <button className="outbtn" onClick={logout}>
                    <a href="/home">
                      {t('Popup.logout')}
                    </a>
                  </button>
                </form>
                <button className="exitButton">
                  <Link to="/home">
                    <span className="popSpan">{t('Popup.exit')}</span>
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
