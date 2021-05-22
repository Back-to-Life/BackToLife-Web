import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import './Chart.css'
import { useTranslation } from 'react-i18next';

 const DynamicChart = () => {
    const {t, i18n} = useTranslation();

     const [chartData, setChartData]  = useState({});
     const Chart = () => {

         let idUser = localStorage.getItem('user-info').split(',')[4].split(':')[1].split('"')[1]
         axios.get(`http://localhost:5000/points/${idUser}/Points`)
         .then(res => {
            //  console.log(res);

             let dataObj = res.data.data
            //  console.log(res.data)
             setChartData({
                 labels: [t('Chart.Glass'),t('Chart.Plastic'),t('Chart.Electronic'),t('Chart.Battery'),t('Chart.Metal'),t('Chart.Organic'),t('Chart.Paper')],
                 datasets: [{
                                              label: 'Recycling Count',
                                              data: [dataObj.Glass,dataObj.Plastic,dataObj.Electronic,dataObj.Battery,dataObj.Metal,dataObj.Organic,dataObj.Paper],
                                              backgroundColor: [
                                                'rgba(255, 99, 132, 0.2)',
                                                'rgba(54, 162, 235, 0.2)',
                                               'rgba(255, 206, 86, 0.2)',
                                               'rgba(75, 192, 192, 0.2)',
                                               'rgba(153, 102, 255, 0.2)',
                                               'rgba(255, 159, 64, 0.2)',
                                               'rgba(0, 106, 113, 0.2)',
                                                  
                                              ],
                                              borderColor: [
                                                'rgba(255, 99, 132, 1)',
                                                'rgba(54, 162, 235, 1)',
                                               'rgba(255, 206, 86, 1)',
                                               'rgba(75, 192, 192, 1)',
                                               'rgba(153, 102, 255, 1)',
                                               'rgba(255, 159, 64, 1)',
                                               'rgba(0, 106, 113, 0.6)',
                                               
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
               <h1>{t('Account.chartType')}</h1>
               <div className="Bar">
                   <Doughnut
                     data={chartData}
                     width="60%"
                     height="10%"
                     options={{
                        // maintainAspectRatio: false,
                         responsive:true,
                         scales:{
                             yAxes:{
                                 ticks:{
                                     beginAtZero: true
                                 }
                             }
                         }
                     }}
                   />
               </div>
           </div>
       )
 }
 export default DynamicChart;