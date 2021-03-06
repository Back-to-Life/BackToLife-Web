import React, { useState, useEffect } from "react";
import "./Myaccount.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IconContext } from "react-icons/lib";
import ImageUpload from "../../ImageUpload/ImageUpload";
import Chart from "../../Chart/Chart.js";
import DataUpload from "../../DataUpload/DataUpload";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { useTranslation } from "react-i18next";
import ChartRecType from "../../Chart/ChartRecType.js"
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";
import {BASE_URL} from '../../../enviroments'

function Myaccount() {
  const [hero, setHero] = useState([]);
  const [idH, setHid] = useState([]);
  const [pointH, setPointH] = useState([]);
  const [heroId, setId] = useState([]);
  const [indexH, setIndex] = useState([]);
  const [nameUser, setNameUser] = useState([]);
  const [pointUser, setPointUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const { t, i18n } = useTranslation();

  const sort = async(e) => {
  let result = await fetch(`${BASE_URL}/sort`, 
  {
    method: "GET"
  })
  result = await result.json()
  }
  
  const override = css`
    margin-top: 30%;
    margin-left: -5%;`;

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000);

    (async ()=>{
        const respHero = await fetch(`${BASE_URL}/sort`) //fetch user name, id and point
        const jsonHero = await respHero.json()
        setHero(jsonHero.data.names);
        setHid(jsonHero.data.ids);
        setPointH(jsonHero.data.points);

        let idUser =  localStorage.getItem('user-info').split(',')[2].split(':')[1].split('"')[1] // fetch login user id, name, point
        const resId = await fetch(`${BASE_URL}/users/${idUser}`)
        const jsonId = await resId.json()
        setId(idUser);
        setNameUser(jsonId.data.name)
        setPointUser(jsonId.data.point)

        let sortUser = localStorage.getItem('user-info').split(',')[3].split(':')[1].split('" "')[0].split('}')[0] // get user rank
        setIndex(sortUser) 
       
    })();
    }, []);

  return (

    <IconContext.Provider value={{ color: "#58c4bc", size: 64 }}>
   
      <div className="background">
        <div className="section_card">
          <div className="wrapper">
            <div className="containerr">
              <div className="container_card">
                <div className="container_cardInfo">
                  <div className="image">
                    <ImageUpload />
                  </div>
                  <ul className="features">
                    <DataUpload />
                    <br />
                    <div className="ortala" align="center">
                      <p>{t("Account.description")}</p>
                    </div>
                  </ul>
                  <div className="kucukresim">
                    <img src="images/recycle.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="container_card">
                <div className="container_cardInfo">
                  <Carousel autoPlay axis="horizontal" infiniteLoop>
                    <div className="card">
                      <img src="images/card4.jpg" alt="kart" />
                    </div>
                    <div className="card">
                      <img src="images/card1.jpg" alt="kart" />
                    </div>
                    <div className="card">
                      <img src="images/card3.jpg" alt="kart" />
                    </div>
                    <div className="card">
                      <img src="images/card7.jpg" alt="kart" />
                    </div>
                  </Carousel>
                  <h2>{t("Account.earn")}</h2>
                  <ProgressBar />
                </div>
              </div>

              <div className="container_card">
                <div className="container_cardInfo">
                    <div className="imgHero">
                        <img src="images/hero.png" alt=""/>
                    </div>
                    <div className="headerHero">
                        <h1  onClick={sort} >{t('Account.hero')}</h1>
                    </div>

                  {
                       loading ? 
                        <PacmanLoader
                        css={override}
                        size={20}
                        color={"#58c4bc"}
                        loading={loading}
                        />
                       :
                       <div className="sort">
                       <ul>

                       <li><img src="images/first.png" alt=""/>  <span className="nameHero">{hero[0]}</span><span className="pointHero">+{pointH[0]}p</span></li>
                       <br />
                       <li><img src="images/second.png" alt=""/> <span className="nameHero">{hero[1]}</span><span className="pointHero">+{pointH[1]}p</span></li>
                       <br />
                       <li><img src="images/third.png" alt=""/>  <span className="nameHero">{hero[2]}</span><span className="pointHero">+{pointH[2]}p</span></li>
                       <br />

                     {
                       (heroId == idH[0] || heroId == idH[1] || heroId == idH[2]) ?

                       <li><img className="more" src="images/ellipsis.png" alt=""/> </li> 
                       :
                       <>
                         <li><img className="more" src="images/ellipsis.png" alt=""/> </li>
                         <br />
                       <li><span className="indexUser">{indexH}-</span><span className="nameuser">{nameUser}</span><span className="pointHero">+{pointUser}p</span></li> 
                       
                       </>
                    }
                   </ul>
                   </div>
                  } 
                    </div>
              </div>
            </div>
          </div>
          <div className="gif">
            <img src="images/scroll.gif" alt="" />
          </div>
        </div>

        <div className="containerBigCard">
          <div className="container_big">
            <Chart/>
          </div>
        </div>
        <br />
        <br />
        <div className="containerBigCard">
          <div className="container_big">
            <ChartRecType/>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}


export default Myaccount;
