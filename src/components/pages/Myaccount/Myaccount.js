import React from "react";
import "./Myaccount.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IconContext } from "react-icons/lib";
import ImageUpload from "../../ImageUpload";
import Chart from "../../Chart/Chart.js";
import DataUpload from "../../DataUpload";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { useTranslation } from "react-i18next";
import Navbar from "../../Navbar";

function Myaccount() {
  const { t, i18n } = useTranslation();

  return (
    <IconContext.Provider value={{ color: "#58c4bc", size: 64 }}>
     <Navbar/>
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
                        <h1>{t('Account.hero')}</h1>
                    </div>
                    <div className="sort">
                    <ul>
                        <li><img src="images/first.png" alt=""/>Birinci</li>
                        <li><img src="images/second.png" alt=""/>İkinci</li>
                        <li><img src="images/third.png" alt=""/>Üçüncü</li>
                    </ul>
                    <img className="more" src="images/ellipsis.png" alt=""/> 
                    <ul>
                        <li className="person">
                           34 -  
                        </li>
                    </ul>
                    </div>
                    
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
      </div>
    </IconContext.Provider>
  );
}

export default Myaccount;
