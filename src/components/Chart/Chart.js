import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import './Chart.css'
import { useTranslation } from 'react-i18next';
import {BASE_URL} from '../../enviroments'

 const DynamicChart = () => {
    const {t, i18n} = useTranslation();

    const [chartData, setChartData]  = useState({});

    const Chart = () => {
         let count = [];
         let date = [];
         let idUser = localStorage.getItem('user-info').split(',')[4].split(':')[1].split('"')[1]
         axios.get(`${BASE_URL}/logins/${idUser}/showCounter`)
         .then(res => {

             for(const dataCount of res.data.data){
               
                 date.push(dataCount.loginDetails[0].loginDate)
                 count.push(parseInt(dataCount.loginDetails[0].loginCounter))
                
             }
            
             setChartData({
                 labels: date,
                 datasets: [{
                                              label: t('Account.label'),
                                              data: count,
                                              backgroundColor: [
                                                  'rgba(255, 99, 132, 0.2)',
                                                  'rgba(54, 162, 235, 0.2)',
                                                  'rgba(255, 206, 86, 0.2)',
                                                  'rgba(75, 192, 192, 0.2)',
                                                  'rgba(153, 102, 255, 0.2)',
                                                  'rgba(255, 159, 64, 0.2)',
                                                  'rgba(255, 99, 132, 0.2)',
                                                  'rgba(54, 162, 235, 0.2)',
                                                  'rgba(255, 206, 86, 0.2)',
                                                  'rgba(75, 192, 192, 0.2)',
                                                  'rgba(153, 102, 255, 0.2)',
                                                  'rgba(255, 159, 64, 0.2)',
                                                  'rgba(255, 99, 132, 0.2)',
                                                  'rgba(54, 162, 235, 0.2)',
                                                  'rgba(255, 206, 86, 0.2)',
                                                  'rgba(75, 192, 192, 0.2)',
                                                  'rgba(153, 102, 255, 0.2)',
                                                  'rgba(255, 159, 64, 0.2)',
                                                  'rgba(255, 99, 132, 0.2)',
                                                  'rgba(54, 162, 235, 0.2)',
                                                  'rgba(255, 206, 86, 0.2)',
                                                  'rgba(75, 192, 192, 0.2)',
                                                  'rgba(153, 102, 255, 0.2)',
                                                  'rgba(255, 159, 64, 0.2)',
                                              ],
                                              borderColor: [
                                                   'rgba(255, 99, 132, 1)',
                                                   'rgba(54, 162, 235, 1)',
                                                  'rgba(255, 206, 86, 1)',
                                                  'rgba(75, 192, 192, 1)',
                                                  'rgba(153, 102, 255, 1)',
                                                  'rgba(255, 159, 64, 1)',
                                                  'rgba(255, 99, 132, 1)',
                                                  'rgba(54, 162, 235, 1)',
                                                  'rgba(255, 206, 86, 1)',
                                                  'rgba(75, 192, 192, 1)',
                                                  'rgba(153, 102, 255, 1)',
                                                  'rgba(255, 159, 64, 1)',
                                                  'rgba(255, 99, 132, 1)',
                                                  'rgba(54, 162, 235, 1)',
                                                  'rgba(255, 206, 86, 1)',
                                                  'rgba(75, 192, 192, 1)',
                                                  'rgba(153, 102, 255, 1)',
                                                  'rgba(255, 159, 64, 1)',
                                                  'rgba(255, 99, 132, 1)',
                                                  'rgba(54, 162, 235, 1)',
                                                  'rgba(255, 206, 86, 1)',
                                                  'rgba(75, 192, 192, 1)',
                                                  'rgba(153, 102, 255, 1)',
                                                  'rgba(255, 159, 64, 1)',
                                              ],
                                              borderWidth: 1
                                          }]
             });
         })
         .catch(err =>{
             console.log(err);
             
         })
      
     }
      useEffect(() => {
          Chart();
        }, []);
       return(
           <div className="App">
               <h1>{t('Account.chart')}</h1>
               <div className="Bar">
                   <Bar
                     data={chartData}
                     width="60%"
                     height="10%"
                     options={{
                        
                         responsive:true,
                         scales:{
                            yAxes:{
                             
                                ticks:{
                                    beginAtZero: true,
                                    scaleStartValue: 0,
                                },
                            
                            }
                         }
                     }}
                   />
               </div>
           </div>
       )
 }
 export default DynamicChart;
