import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './ProgressBar.css'


const ProgressBar = () =>{
    const [percentage, setPercentage] = useState(0);
    const [point, setPoint]= useState([]);
   useEffect(()=>{
       (async () => {
       const response = await fetch("http://localhost:5000/users");
        const datajson = await response.json();
        const [item] = datajson.data;
        setPercentage(item);

        let idUser =  localStorage.getItem('user-info').split(',')[2].split(':')[1].split('"')[1]
        const resPoint = await fetch(`http://localhost:5000/users/${idUser}`)
        const jsonPoint = await resPoint.json()
        setPoint(jsonPoint.data.point); 
       })();
   }, []);
   
    return(
        <div style={{width:"200px", padding: "40px 40px 40px 40px"}}>

                <CircularProgressbar
                 value={point}
                 text={`${point} ₺`}
                 styles={buildStyles({
                    
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(88, 195, 187, ${point / 30})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                    })}
                    />
        </div>
    )

}
export default ProgressBar;