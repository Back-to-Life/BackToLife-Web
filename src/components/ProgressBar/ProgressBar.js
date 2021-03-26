import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import  ChangingProgressProvider  from "./ChangingProgressProvider.js";
import './ProgressBar.css'

const ProgressBar = () =>{

    const percentage = 66;

    return(
        <div style={{width:"200px", padding: "40px 40px 40px 40px"}}>

                <CircularProgressbar
                 value={percentage}
                 text={`${percentage} ₺`}
                 styles={buildStyles({
                    
                    // rotation: 0.25,
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(14, 66, 93, ${percentage / 100})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                    })}
                    />
        
            
        </div>
    )

}
export default ProgressBar;