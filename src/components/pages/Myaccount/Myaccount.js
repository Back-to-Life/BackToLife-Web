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
import { useState, useEffect } from "react";


function Myaccount() {
  const { t, i18n } = useTranslation();

const sort = async(e) => {
  let result = await fetch("http://localhost:5000/sort", 
  {
    method: "GET"
  })
  result = await result.json()
console.log("result", result)
}
  const [hero, setHero] = useState([]);
  const [pointH, setPointH] = useState([]);
  const [countU, setCount] = useState([]);
  useEffect(()=>{
    (async ()=>{
        const respHero = await fetch("http://localhost:5000/sort")
        const jsonHero = await respHero.json()
        //const [itemData] = jsonData.data
        setHero(jsonHero.names);

        const respImg = await fetch("http://localhost:5000/users/")
        const jsonImg = await respImg.json()
        // const itemImg= jsonImg.data.imageUrl;
        setCount(jsonImg.count);

        const respPoint = await fetch("http://localhost:5000/sort")
        const jsonPoint = await respPoint.json()
        //const [itemData] = jsonData.data
        setPointH(jsonPoint.points);
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
                    <div className="sort">
                    <ul>

                     

                    <li><img src="images/first.png" alt=""/>  <span className="nameHero">{hero[countU-1]}</span> <span className="pointHero">+{pointH[countU-1]}p</span></li>
                        <br />
                        <li><img src="images/second.png" alt=""/> <span className="nameHero">{hero[countU-2]}</span> <span className="pointHero">+{pointH[countU-2]}p</span></li>
                        <br />
                        <li><img src="images/third.png" alt=""/>  <span className="nameHero">{hero[countU-3]}</span> <span className="pointHero">+{pointH[countU-3]}p</span></li>
                        
                    </ul>
                    {/* <img className="more" src="images/ellipsis.png" alt=""/> 
                    <ul>
                        <li className="person">
                           Sen-   
                        </li>
                    </ul> */}
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
