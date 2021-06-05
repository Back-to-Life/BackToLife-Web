import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './ProgressBar.css'


const ProgressBar = () =>{
   
    const [point, setPoint]= useState(0);
   useEffect(()=>{
       (async () => {
        let idUser =  localStorage.getItem('user-info').split(',')[2].split(':')[1].split('"')[1]
        const resPoint = await fetch(`http://localhost:5000/users/${idUser}`)
        const jsonPoint = await resPoint.json()
        setPoint(jsonPoint.data.point); 
       })();
   }, []);
   
    return(
        <div style={{width:"230px", padding: "40px 40px 40px 40px"}}>

                <CircularProgressbar
                 value={point/10}
                 text={`${point/10} ₺`}
                 styles={buildStyles({
                    
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(88, 195, 187, ${point / 20})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                    })}
                    />
        </div>
    )

}
export default ProgressBar;