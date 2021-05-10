import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './ProgressBar.css'


const ProgressBar = () =>{
    const [percentage, setPercentage] = useState(0);

   useEffect(()=>{
       (async () => {
       const response = await fetch("http://dummy.restapiexample.com/api/v1/employees");
        const datajson = await response.json();
        const [item] = datajson.data;
        setPercentage(item);
       })();
   }, []);
   
    return(
        <div style={{width:"200px", padding: "40px 40px 40px 40px"}}>

                <CircularProgressbar
                 value={percentage.employee_age}
                 text={`${percentage.employee_age} ₺`}
                 styles={buildStyles({
                    
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(14, 66, 93, ${percentage.employee_age / 100})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                    })}
                    />
        </div>
    )

}
export default ProgressBar;