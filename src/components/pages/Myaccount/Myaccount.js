import React from 'react'
import './Myaccount.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {IconContext} from 'react-icons/lib';
import ImageUpload from '../../ImageUpload';
import Chart from '../../Chart/Chart.js';
import DataUpload from '../../DataUpload';


 class Myaccount extends React.Component {

     onChangeEvent = () => {
         console.log('onChange Event Triggered');
     }

     onClickItemEvent = () => {
         console.log('onClickItem Event Triggered');
     }

     onClickThumbEvent = () => {
         console.log('onClickThumb Event Triggered');
     }

     onSwipeStartEvent = () => {
         console.log('onSwipeStart Event Triggered');
     }

     onSwipeEndEvent = () => {
         console.log('onSwipeEnd Event Triggered');
     }

     onSwipeMoveEvent = () => {
         console.log('onSwipeMove Event Triggered');
     }

    render() {
        return (
            <IconContext.Provider value={{color:'#58c4bc', size: 64}}>
            <div className="background">
                <div className="section_card">
                    <div className="wrapper">
                        <div className="containerr">
                            <div className="container_card">
                                <div className="container_cardInfo">
                                    <div className="image">
                                       <ImageUpload/>
                                    </div>
                                    <ul className="features">
                                    <DataUpload/>
                                        <br/>
                                        <div className="ortala" align="center">
                                        <p>If you want to make money while contributing to nature, you are in the right place.</p>
                                        </div>
                                    </ul>
                                    <div className="kucukresim">
                                    <img src="images/recycle.svg" alt="" />
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="container_card">
                            <div className="container_cardInfo">
                            <Carousel autoPlay axis="horizontal" infiniteLoop
                               onChange={this.onChangeEvent}
                               onClickItem={this.onClickItemEvent}
                               onClickThumb={this.onClickThumbEvent}
                               onSwipeStart={this.onSwipeStartEvent}
                               onSwipeEnd={this.onSwipeEndEvent}
                               onSwipeMove={this.onSwipeMoveEvent}>
                               
                               <div className="card"><img src="images/card4.jpg" alt="kart"/></div> 
                               <div className="card"><img src="images/card1.jpg" alt="kart"/></div> 
                               <div className="card"><img src="images/card3.jpg" alt="kart"/></div> 
                               <div className="card"><img src="images/card7.jpg" alt="kart"/></div> 
                         

                             </Carousel>
                             </div>
                             </div>
                            
                             <div className="container_card">
                                <div className="container_cardInfo">
                                  
                                    
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                            <div className="containerBigCard">
                            <div className="container_big">
                                <Chart/>
                            </div>
                            </div>
                            
                           
            </div>
               </IconContext.Provider>
        )
    }

}
export default Myaccount;