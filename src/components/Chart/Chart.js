import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import './Chart.css'
import { useTranslation } from 'react-i18next';

 const DynamicChart = () => {
    const {t, i18n} = useTranslation();

     const [chartData, setChartData]  = useState({});

     const Chart = () => {
         let empSal = [];
         let empAge = [];
         axios.get("http://localhost:5000/logins/60a8f89dd7e1895d5c099e64/showCounter")
         .then(res => {
             console.log(res);

             for(const dataCount of res.data.data){
               
                 empAge.push(dataCount.loginDetails[0].loginDate)
                 empSal.push(parseInt(dataCount.loginDetails[0].loginCounter))
                
             }
            
             setChartData({
                 labels: empAge,
                 datasets: [{
                                              label: t('Account.label'),
                                              data: empSal,
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
                        // maintainAspectRatio: false,
                         responsive:true,
                         scales:{
                             y:{
                                beginAtZero: true
                             }
                         }
                     }}
                   />
               </div>
           </div>
       )
 }
 export default DynamicChart;