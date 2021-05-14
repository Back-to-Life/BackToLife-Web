import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './ProgressBar.css'


const ProgressBar = () =>{
    const [percentage, setPercentage] = useState(0);

   useEffect(()=>{
       (async () => {
       const response = await fetch("http://localhost:5000/users");
        const datajson = await response.json();
        const item = datajson.data[0];
        setPercentage(item);
       })();
   }, []);
   
    return(
        <div style={{width:"200px", padding: "40px 40px 40px 40px"}}>

                <CircularProgressbar
                 value={percentage.point}
                 text={`${percentage.point} ₺`}
                 styles={buildStyles({
                    
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(88, 195, 187, ${percentage.point / 20})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                    })}
                    />
        </div>
    )

}
export default ProgressBar;